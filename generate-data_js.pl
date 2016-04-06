#!/usr/bin/perl
##########################################################################
# generate-data_js.pl - Generate data.js for dotabuffcp                  #
# Copyright (C) <2014>  Onur Aslan  <onuraslan@gmail.com>                #
#                                                                        #
# See COPYING for distribution information.                              #
##########################################################################


use strict;
use warnings;
use LWP::Simple;
use JSON;
use POSIX qw/strftime/;
use LWP;

my $DEBUG = 0;
my @heroes;
my @heroes_bg;
my @heroes_wr;
my @win_rates;
my @friend_win_rates;


sub read_data {
  my $content = '';
  $content .= $_ while (<DATA>);
  return $content;
}


sub hero_link {
  my $hero = $_[0];
  $hero =~ s/'//g;
  $hero =~ s/ /-/g;
  $hero =~ tr/[A-Z]/[a-z]/;
  return $hero;
}


sub hero_id {
  my $hero = $_[0];

  my $c = 0;
  for (@heroes) {
    return $c if ($_ eq $hero);
    ++$c;
  }
  return -1;
}


sub get_heroes {

  $DEBUG and warn "Getting hero list\n";

  my $content = get ('http://dotabuff.com/heroes') or die;
  (@heroes_bg) = $content =~ /background: url\((.*?)\)/g;
  (@heroes) = $content =~ /<div class="name">(.*?)<\/div>/g;
  $_ =~ s/'// for (@heroes);  # fix name of nature's prophet
  $_ =~ s/&.*?;// for (@heroes);
  $_ =~ s/&#47;/\//g for (@heroes_bg);
}



sub get_winrates_of_hero {
  my ($hero, $hid) = ($_[0], hero_id ($_[0]));

  $DEBUG and warn "Getting winrates of $hero\n";

  print 'Getting dotabuff counter winrates for: ' . $hero . "\n";

  my $content = get ('http://dotabuff.com/heroes/' .
                     hero_link ($hero) .
                     '/matchups?date=month') or die;
  
  my (@wr) = $content =~ /<dl><dd><span class="(?:won|lost)">(.*?)%<\/span><\/dd><dt>Win Rate<\/dt><\/dl>/g;
  $heroes_wr[$hid] = $wr[0];

  my $re = qr|<td class="cell-xlarge"><a class="link-type-hero" href="/heroes/.*?">(.*?)</a></td><td data-value="(.*?)">.*?%<div class="bar bar-default"><div class="segment segment-advantage" style="width: [\d.]+%;"></div></div></td><td data-value="(.*?)">.*?%<div class="bar bar-default"><div class="segment segment-win" style="width: [\d.]+%;"></div></div></td><td data-value="\d+">([\d,]+)<div class="bar bar-default"><div class="segment segment-match" style="width: [\d.]+%;"></div></div></td></tr>|;

  my (@heros) = $content =~ /$re/g;

  #print 'Matches found: ' . scalar @heros . "\n";
  print join(", ", @heros), "\n";

  my $c = 0;
  my @a;

  for (@heros) {
    $_ =~ s/&.*?;// if $c == 0;
    $_ =~ s/&#39;// if $c == 0;
    $_ =~ s/,// if $c == 3;

    push @a, $_;
    ++$c;
    if ($c == 4) {
      $win_rates[$hid][hero_id ($a[0])] = [ @a[1..3] ];
      $c = 0;
      @a = ();
    }
  }

}

sub hero_link_dotamax {
  my $hero = $_[0];
  $hero =~ tr/[A-Z]/[a-z]/;
  $hero =~ s/ /_/g;
  $hero =~ s/'//g;
  $hero =~ s/-//g;
  $hero =~ s/centaur_warrunner/centaur/;
  $hero =~ s/clockwerk/rattletrap/;
  $hero =~ s/doom/doom_bringer/;
  $hero =~ s/^io/wisp/;
  $hero =~ s/lifestealer/life_stealer/;
  $hero =~ s/magnus/magnataur/;
  $hero =~ s/natures_prophet/furion/;
  $hero =~ s/necrophos/necrolyte/;
  $hero =~ s/outworld_devourer/obsidian_destroyer/;
  $hero =~ s/queen_of_pain/queenofpain/;
  $hero =~ s/shadow_fiend/nevermore/;
  $hero =~ s/timbersaw/shredder/;
  $hero =~ s/treant_protector/treant/;
  $hero =~ s/vengeful_spirit/vengefulspirit/;
  $hero =~ s/windranger/windrunner/;
  $hero =~ s/wraith_king/skeleton_king/;
  $hero =~ s/zeus/zuus/;
  return $hero;
}

sub get_winrates_with_teammate {
  my ($hero, $hid) = ($_[0], hero_id ($_[0]));

  $DEBUG and warn "Getting winrates of $hero\n";

  print 'Getting dotamax teammate winrates for: ' . $hero . "\n";

  my $browser = LWP::UserAgent->new;
  my @headers = ('Accept-Language' => 'en-US');

  my $content = $browser->get ('http://dotamax.com/hero/detail/match_up_comb/' .
                     hero_link_dotamax($hero) .
                     '/?time=month&ladder=y', @headers) or die;

  my (@heros) = $content->content =~ /<span class="hero-name-list">(.*?)<\/span><\/td><td><div style="height: 10px">(.*?)%<\/div><div class="segment segment-.*?" style="width:.*?%;"><\/div><\/td><!--.*?--><td><div style="height: 10px">(.*?)%<\/div><div class="segment segment-gold" style="width:.*?%;"><\/div><\/td><td><div style="height: 10px">(.*?)<\/div>/gs;

  #print 'Matches found: ' . scalar @heros . "\n";
  print join(", ", @heros), "\n";

  my $c = 0;
  my @a;

  for (@heros) {
    $_ =~ s/&.*?;// if $c == 0;
    $_ =~ s/&#39;// if $c == 0;
    $_ =~ s/,// if $c == 3;

    push @a, $_;
    ++$c;
    if ($c == 4) {
      $friend_win_rates[$hid][hero_id ($a[0])] = [ @a[1..3] ];
      $c = 0;
      @a = ();
    }
  }

}

sub get_winrates {
  get_winrates_of_hero ($_) for (@heroes);
  get_winrates_with_teammate ($_) for (@heroes);
}

sub print_winrates {
  my $json = JSON->new;

  $DEBUG and warn "Writing win rates to data.js\n";

  open my $fh, '>data.js';

  print $fh 'var heroes = ', $json->encode ([ @heroes ]);
  print $fh ', heroes_bg = ', $json->encode ([ @heroes_bg ]);
  print $fh ', heroes_wr = ', $json->encode ([ @heroes_wr ]);
  print $fh ', win_rates = ', $json->encode ([ @win_rates ]);
  print $fh ', friend_win_rates = ', $json->encode ([ @friend_win_rates ]);
  print $fh ', update_time = "',
               strftime("%Y-%m-%d", localtime (time ())),
               "\";\n";
  close $fh;
}


$_ eq '--debug' and $DEBUG++ for @ARGV;

get_heroes ();
get_winrates ();
print_winrates ();

__DATA__
