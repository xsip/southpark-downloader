import {downloadEpisodeMetaFn} from './download-episode-meta-fn';
import {EpisodeMeta} from './types';

export const getSeasonMeta1 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/940f8z/south-park-cartman-und-die-analsonde-staffel-1-ep-1",
    "https://www.southpark.de/folgen/iuifco/south-park-knall-endlich-den-hasen-ab-staffel-1-ep-2",
    "https://www.southpark.de/folgen/er4a32/south-park-wie-werde-ich-ein-kampfkoloss-staffel-1-ep-3",
    "https://www.southpark.de/folgen/4rcpa5/south-park-ein-heim-fuer-tiertunten-staffel-1-ep-4",
    "https://www.southpark.de/folgen/2ly7rt/south-park-tanz-der-mutanten-staffel-1-ep-5",
    "https://www.southpark.de/folgen/u9aiib/south-park-wer-killt-opa-staffel-1-ep-6",
    "https://www.southpark.de/folgen/242csn/south-park-her-mit-dem-hirn-staffel-1-ep-7",
    "https://www.southpark.de/folgen/scexjh/south-park-ein-fettwanst-in-aethiopien-staffel-1-ep-8",
    "https://www.southpark.de/folgen/rmf3o8/south-park-mr-hankey-der-weihnachtskot-staffel-1-ep-9",
    "https://www.southpark.de/folgen/mfcnvu/south-park-damien-staffel-1-ep-10",
    "https://www.southpark.de/folgen/44i3y3/south-park-geil-auf-miss-ellen-staffel-1-ep-11",
    "https://www.southpark.de/folgen/negd7t/south-park-robo-streisand-staffel-1-ep-12",
    "https://www.southpark.de/folgen/dumjvr/south-park-cartmans-mama-ist-eine-schlampe-staffel-1-ep-13"
  ];
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode);
  }
}
export const getSeasonMeta2 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/utrgmi/south-park-terrance-philipp-zeigen-pupse-gegen-saddam-staffel-2-ep-1",
    "https://www.southpark.de/folgen/vhjxun/south-park-und-noch-immer-ist-cartmans-mama-eine-schlampe-staffel-2-ep-2",
    "https://www.southpark.de/folgen/i3ry4k/south-park-kampf-um-die-vorhaut-staffel-2-ep-3",
    "https://www.southpark.de/folgen/c1m717/south-park-rauf-auf-s-huhn-staffel-2-ep-4",
    "https://www.southpark.de/folgen/wl2v8q/south-park-schoener-waer-ne-warze-staffel-2-ep-5",
    "https://www.southpark.de/folgen/q9v4qf/south-park-jesus-verliert-einschaltquoten-staffel-2-ep-6",
    "https://www.southpark.de/folgen/k5278s/south-park-griff-in-die-geschichte-staffel-2-ep-7",
    "https://www.southpark.de/folgen/3wdzae/south-park-tote-hose-staffel-2-ep-8",
    "https://www.southpark.de/folgen/5ftz8k/south-park-mr-hankey-gegen-den-mist-aus-hollywood-staffel-2-ep-9",
    "https://www.southpark.de/folgen/ewsl9y/south-park-der-wind-hat-mir-ne-pocke-erzaehlt-staffel-2-ep-10",
    "https://www.southpark.de/folgen/2ixlzj/south-park-voll-das-geheimnis-staffel-2-ep-11",
    "https://www.southpark.de/folgen/k58rq5/south-park-streit-scheidung-und-ein-happy-end-in-25-minuten-staffel-2-ep-12",
    "https://www.southpark.de/folgen/4xxqgo/south-park-coole-kuehe-staffel-2-ep-13",
    "https://www.southpark.de/folgen/23818m/south-park-kohle-fuer-den-chefkoch-staffel-2-ep-14",
    "https://www.southpark.de/folgen/973coq/south-park-boeser-boeser-fisch-staffel-2-ep-15",
    "https://www.southpark.de/folgen/q52xqu/south-park-rohe-weihnachten-charlie-manson-staffel-2-ep-16",
    "https://www.southpark.de/folgen/13y790/south-park-boese-buben-bringen-beistand-staffel-2-ep-17",
    "https://www.southpark.de/folgen/19f06j/south-park-wem-gehoert-der-typ-aus-dem-eis-staffel-2-ep-18"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode);
  }
}
export const getSeasonMeta3 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/hv0a9m/south-park-regenwald-regenwald-du-laesst-mich-voellig-kalt-staffel-3-ep-1",
    "https://www.southpark.de/folgen/iizk09/south-park-spontane-selbstentzuendung-staffel-3-ep-2",
    "https://www.southpark.de/folgen/97d61n/south-park-chefkoch-liebt-nen-sukkubus-staffel-3-ep-3",
    "https://www.southpark.de/folgen/f1j0t8/south-park-south-park-saurier-staffel-3-ep-4",
    "https://www.southpark.de/folgen/7efemk/south-park-tweek-gegen-craig-staffel-3-ep-5",
    "https://www.southpark.de/folgen/zcplyz/south-park-ich-fuehl-mich-voll-belaestigt-staffel-3-ep-6",
    "https://www.southpark.de/folgen/9h0qbg/south-park-katzenorgie-teil-1-staffel-3-ep-7",
    "https://www.southpark.de/folgen/noc1s7/south-park-wenn-der-vater-mit-dem-vater-teil-2-staffel-3-ep-8",
    "https://www.southpark.de/folgen/wq9n30/south-park-beschnittene-pfadfinder-teil-3-staffel-3-ep-9",
    "https://www.southpark.de/folgen/h7udco/south-park-korns-echt-abgefahrene-geisterstory-staffel-3-ep-10",
    "https://www.southpark.de/folgen/mkw3sw/south-park-chinpokomon-staffel-3-ep-11",
    "https://www.southpark.de/folgen/x7thqq/south-park-vorsicht-vor-dem-wahren-leben-staffel-3-ep-12",
    "https://www.southpark.de/folgen/ziuoor/south-park-hungriger-hugos-mission-im-all-staffel-3-ep-13",
    "https://www.southpark.de/folgen/d9sb5t/south-park-fackeln-im-sturm-fuer-arme-staffel-3-ep-14",
    "https://www.southpark.de/folgen/w7a0m8/south-park-halleluja-mr-hankeys-klassische-weihnachten-staffel-3-ep-15",
    "https://www.southpark.de/folgen/6ci3pc/south-park-hallo-gott-hier-ist-jesus-staffel-3-ep-16",
    "https://www.southpark.de/folgen/gxlmci/south-park-jetzt-gibt-s-was-auf-die-ohren-staffel-3-ep-17"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode);
  }
}
export const downloadSeasonMetaData = async (episodes: string[], outDir: string) => {
  const data: Record<string, {data: EpisodeMeta[]}> = {};
  for(const episode of episodes) {
    const episodeData = await downloadEpisodeMetaFn(episode,outDir);
    data[episodeData[0].mediaTitle] = {data: episodeData};
  }
  return data;
}
export const getSeasonMeta4 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/x5kud8/south-park-zahnfee-mafia-co-staffel-4-ep-1",
    "https://www.southpark.de/folgen/1fr0nc/south-park-die-lustige-geschichte-ueber-ein-verbrechen-aus-hass-staffel-4-ep-2",
    "https://www.southpark.de/folgen/ixn44n/south-park-alle-macht-den-drogen-staffel-4-ep-3",
    "https://www.southpark.de/folgen/ib8m8u/south-park-opa-macht-die-oma-tot-staffel-4-ep-4",
    "https://www.southpark.de/folgen/vxu8qr/south-park-kenny-s-karma-52-staffel-4-ep-5",
    "https://www.southpark.de/folgen/dgwub0/south-park-nicht-ohne-meine-niere-staffel-4-ep-6",
    "https://www.southpark.de/folgen/zplcis/south-park-flaggenkrieg-staffel-4-ep-7",
    "https://www.southpark.de/folgen/oien0o/south-park-flutschfinger-on-tour-staffel-4-ep-8",
    "https://www.southpark.de/folgen/bw7g97/south-park-ist-die-hoelle-behindertengerecht-teil-1-staffel-4-ep-9",
    "https://www.southpark.de/folgen/06brb8/south-park-wird-wohl-teil-2-staffel-4-ep-10",
    "https://www.southpark.de/folgen/d9fr51/south-park-vierte-klasse-staffel-4-ep-11",
    "https://www.southpark.de/folgen/5fuujn/south-park-widerstand-ist-zwecklos-staffel-4-ep-12",
    "https://www.southpark.de/folgen/dh0u78/south-park-helen-keller-das-musical-staffel-4-ep-13",
    "https://www.southpark.de/folgen/6bxssx/south-park-grosse-erwartungen-staffel-4-ep-14",
    "https://www.southpark.de/folgen/frgptn/south-park-die-krazy-kenny-show-staffel-4-ep-15",
    "https://www.southpark.de/folgen/fmgki1/south-park-abenteuer-missbrauch-staffel-4-ep-16",
    "https://www.southpark.de/folgen/7rd3vw/south-park-und-keiner-lacht-zur-weihnachtszeit-staffel-4-ep-17"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode);
  }
}
export const getSeasonMeta5 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/nppzdg/south-park-verfluchtes-fluchwort-staffel-5-ep-1",
    "https://www.southpark.de/folgen/jgvuoc/south-park-krueppel-keile-staffel-5-ep-2",
    // "https://www.southpark.de/folgen/b1846v/south-park-super-best-friends-staffel-5-ep-3",
    "https://www.southpark.de/folgen/yf32xo/south-park-scott-tenorman-muss-sterben-staffel-5-ep-4",
    "https://www.southpark.de/folgen/vzztv5/south-park-terrance-phillip-hinter-dem-furz-staffel-5-ep-5",
    "https://www.southpark.de/folgen/zm98ei/south-park-cartmanland-staffel-5-ep-6",
    "https://www.southpark.de/folgen/t746u2/south-park-hundemelken-staffel-5-ep-7",
    "https://www.southpark.de/folgen/l23dim/south-park-ein-bisschen-kiffen-staffel-5-ep-8",
    "https://www.southpark.de/folgen/gef4gc/south-park-osama-hat-nix-in-der-hose-staffel-5-ep-9",
    "https://www.southpark.de/folgen/1jaqiq/south-park-arschgesichter-staffel-5-ep-10",
    "https://www.southpark.de/folgen/rxb67x/south-park-was-ist-es-wann-kann-ich-es-kaufen-staffel-5-ep-11",
    "https://www.southpark.de/folgen/ulcvyu/south-park-will-smith-bringt-reiches-pack-nach-south-park-staffel-5-ep-12",
    "https://www.southpark.de/folgen/zb407b/south-park-kennys-tod-staffel-5-ep-13",
    "https://www.southpark.de/folgen/8gq1cu/south-park-butters-das-bin-ich-staffel-5-ep-14"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode);
  }
}
export const getSeasonMeta6 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/vs89ol/south-park-jared-hat-aides-staffel-6-ep-1",
    "https://www.southpark.de/folgen/y0ffuc/south-park-skifahren-ist-fuer-n-arsch-staffel-6-ep-2",
    // "https://www.southpark.de/folgen/aba4sz/south-park-freakshow-staffel-6-ep-3",
    "https://www.southpark.de/folgen/ahrfg6/south-park-vaginitis-ohne-kalbfleisch-staffel-6-ep-4",
    "https://www.southpark.de/folgen/m1tz7n/south-park-terrance-phillip-hinter-dem-furz-staffel-6-ep-5",
    "https://www.southpark.de/folgen/2rl3z6/south-park-professor-chaos-staffel-6-ep-6",
    "https://www.southpark.de/folgen/155r7v/south-park-das-gab-s-doch-schon-bei-den-simpsons-staffel-6-ep-7",
    "https://www.southpark.de/folgen/9sz0th/south-park-nur-koerperliche-liebe-im-vatikan-staffel-6-ep-8",
    "https://www.southpark.de/folgen/b4vsck/south-park-groesser-digitaler-und-umgeschnitten-staffel-6-ep-9",
    "https://www.southpark.de/folgen/g3404w/south-park-bebes-brueste-bringen-krieg-staffel-6-ep-10",
    "https://www.southpark.de/folgen/welysd/south-park-mongolen-vor-southpark-staffel-6-ep-11",
    "https://www.southpark.de/folgen/qly8oc/south-park-eine-leiter-zum-himmel-staffel-6-ep-12",
    "https://www.southpark.de/folgen/u2kecs/south-park-die-rueckkehr-der-gefaehrten-des-rings-zu-den-zwei-tuermen-staffel-6-ep-13",
    "https://www.southpark.de/folgen/z0mpok/south-park-todescamp-der-toleranz-staffel-6-ep-14",
    "https://www.southpark.de/folgen/h70xwl/south-park-the-biggest-douche-in-the-universe-staffel-6-ep-15",
    "https://www.southpark.de/folgen/xfaqzg/south-park-mein-zukunfts-ich-und-ich-staffel-6-ep-16",
    "https://www.southpark.de/folgen/e8zvyz/south-park-weihnachten-im-irak-blut-wunder-staffel-6-ep-17"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode);
  }
}

export const getSeasonMeta7 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/sa19zy/south-park-wird-die-erde-eingestellt-staffel-7-ep-1",
    "https://www.southpark.de/folgen/rvu68b/south-park-guter-krueppel-schlechter-krueppel-staffel-7-ep-2",
    "https://www.southpark.de/folgen/lfnim5/south-park-das-schweigen-des-klopapiers-staffel-7-ep-3",
    "https://www.southpark.de/folgen/zyprl7/south-park-fehlgeburt-einer-nation-staffel-7-ep-4",
    "https://www.southpark.de/folgen/kfc77n/south-park-j-lo-das-doppelte-flittchen-staffel-7-ep-5",
    "https://www.southpark.de/folgen/1jbnuo/south-park-kleine-kriminale-staffel-7-ep-6",
    "https://www.southpark.de/folgen/fopnh6/south-park-unglaublich-geldgeile-ureinwohner-staffel-7-ep-7",
    // "https://www.southpark.de/folgen/fq8wbh/south-park-schwule-verschwoerung-staffel-7-ep-8",
    // "https://www.southpark.de/folgen/iccjhj/south-park-christen-rocken-fett-staffel-7-ep-9",
    "https://www.southpark.de/folgen/gid3ua/south-park-revolution-der-alten-saecke-staffel-7-ep-10",
    "https://www.southpark.de/folgen/me0b40/south-park-casa-bonita-staffel-7-ep-11",
    "https://www.southpark.de/folgen/rl7pjr/south-park-mormonen-machen-sich-was-vor-staffel-7-ep-12",
    "https://www.southpark.de/folgen/u9u3rq/south-park-kippe-weg-staffel-7-ep-13",
    "https://www.southpark.de/folgen/tr6pou/south-park-wir-sind-grufties-staffel-7-ep-14",
    "https://www.southpark.de/folgen/m91chj/south-park-bloeder-die-kanadier-nie-klingen-staffel-7-ep-15"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode);
  }
}
export const getSeasonMeta8 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/2znij2/south-park-spiel-und-spass-mit-waffen-staffel-8-ep-1",
    "https://www.southpark.de/folgen/5nhida/south-park-mit-der-spritze-an-die-spitze-staffel-8-ep-2",
    "https://www.southpark.de/folgen/d7grkc/south-park-die-passion-der-juden-staffel-8-ep-3",
    "https://www.southpark.de/folgen/d47csv/south-park-voll-in-den-ar-gefickt-staffel-8-ep-4",
    "https://www.southpark.de/folgen/ktqvb2/south-park-g-e-i-l-o-m-a-t-staffel-8-ep-5",
    "https://www.southpark.de/folgen/rd6zxu/south-park-die-jeffersons-staffel-8-ep-6",
    "https://www.southpark.de/folgen/n6dj9t/south-park-immigranten-aus-der-zukunft-staffel-8-ep-7",
    "https://www.southpark.de/folgen/ndszwn/south-park-waehl-oder-stirb-staffel-8-ep-8",
    "https://www.southpark.de/folgen/7yupl4/south-park-das-boese-kommt-auf-wall-marts-sohlen-staffel-8-ep-9",
    "https://www.southpark.de/folgen/z31od5/south-park-vorschule-staffel-8-ep-10",
    "https://www.southpark.de/folgen/8fwe5a/south-park-kampf-um-quoten-staffel-8-ep-11",
    "https://www.southpark.de/folgen/uixekv/south-park-lasst-uns-schlampen-spielen-staffel-8-ep-12",
    "https://www.southpark.de/folgen/038jht/south-park-cartmans-unglaubliche-gabe-staffel-8-ep-13",
    "https://www.southpark.de/folgen/itr2k3/south-park-weihnacht-im-walde-staffel-8-ep-14"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode);
  }
}
export const getSeasonMeta9 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/805rnc/south-park-mr-garrisons-schicke-neue-vagina-staffel-9-ep-1",
    "https://www.southpark.de/folgen/xahxl6/south-park-stirb-hippie-stirb-staffel-9-ep-2",
    "https://www.southpark.de/folgen/h9tnne/south-park-die-supergeile-talentagentur-staffel-9-ep-3",
    "https://www.southpark.de/folgen/5gkuf7/south-park-abf-s-allerbeste-freunde-staffel-9-ep-4",
    "https://www.southpark.de/folgen/6q8det/south-park-siegertypen-staffel-9-ep-5",
    // "https://www.southpark.de/folgen/a9w7lr/south-park-der-tod-von-eric-cartman-staffel-9-ep-6",
    "https://www.southpark.de/folgen/7fzi8u/south-park-lattenfieber-staffel-9-ep-7",
    "https://www.southpark.de/folgen/evqh3x/south-park-der-treibhauseffekt-staffel-9-ep-8",
    "https://www.southpark.de/folgen/jy6p4p/south-park-das-weissagungsgeraet-staffel-9-ep-9",
    "https://www.southpark.de/folgen/uhtcfl/south-park-ei-fersucht-staffel-9-ep-10",
    "https://www.southpark.de/folgen/uvp08l/south-park-im-koerper-des-feindes-staffel-9-ep-11",
    "https://www.southpark.de/folgen/a3esfi/south-park-schrankgefluester-staffel-9-ep-12",
    "https://www.southpark.de/folgen/esubf0/south-park-free-willzyx-staffel-9-ep-13",
    "https://www.southpark.de/folgen/dspvu8/south-park-bloody-mary-staffel-9-ep-14"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode);
  }
}
export const getSeasonMeta10 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/38fqq4/south-park-the-return-of-chefkoch-staffel-10-ep-1",
    "https://www.southpark.de/folgen/o0wg88/south-park-snobwarnung-staffel-10-ep-2",
    // "https://www.southpark.de/folgen/m6ohvr/south-park-cartoon-wars-part-i-staffel-10-ep-3",
    // "https://www.southpark.de/folgen/ov0kz8/south-park-cartoon-wars-part-ii-staffel-10-ep-4",
    "https://www.southpark.de/folgen/okhu48/south-park-viel-frottee-um-nichts-staffel-10-ep-5",
    "https://www.southpark.de/folgen/diujt8/south-park-mannbaerschwein-staffel-10-ep-6",
    "https://www.southpark.de/folgen/h7679l/south-park-tsst-staffel-10-ep-7",
    "https://www.southpark.de/folgen/hk2x6r/south-park-make-love-not-warcraft-staffel-10-ep-8",
    "https://www.southpark.de/folgen/bvihkk/south-park-scheiss-paranoia-staffel-10-ep-9",
    "https://www.southpark.de/folgen/cd3jat/south-park-schuljungen-report-staffel-10-ep-10",
    "https://www.southpark.de/folgen/6ok1di/south-park-die-hoelle-auf-erden-staffel-10-ep-11",
    "https://www.southpark.de/folgen/ekt82w/south-park-gott-ist-tot-staffel-10-ep-12",
    "https://www.southpark.de/folgen/rqe7bl/south-park-gott-ist-tot-ii-staffel-10-ep-13",
    "https://www.southpark.de/folgen/w19jp7/south-park-stanley-s-cup-staffel-10-ep-14"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-10');
  }
}
export const getSeasonMeta11 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/7ug7sr/south-park-bitte-ein-n-staffel-11-ep-1",
    "https://www.southpark.de/folgen/pomjzh/south-park-cartman-sucks-staffel-11-ep-2",
    "https://www.southpark.de/folgen/zjrua8/south-park-laustrophobie-staffel-11-ep-3",
    "https://www.southpark.de/folgen/58qtax/south-park-hillary-2-4-staffel-11-ep-4",
    "https://www.southpark.de/folgen/2n6i47/south-park-der-osterhasen-code-staffel-11-ep-5",
    "https://www.southpark.de/folgen/bbubl3/south-park-lesbos-staffel-11-ep-6",
    "https://www.southpark.de/folgen/jp51b1/south-park-die-nacht-der-lebenden-obdachlosen-staffel-11-ep-7",
    "https://www.southpark.de/folgen/1niqj9/south-park-ein-bisschen-tourette-staffel-11-ep-8",
    "https://www.southpark.de/folgen/d3wt0d/south-park-das-grosse-geschaeft-staffel-11-ep-9",
    "https://www.southpark.de/folgen/e1yoxn/south-park-fantasieland-staffel-11-ep-10",
    "https://www.southpark.de/folgen/vtizvz/south-park-fantasieland-episode-ii-staffel-11-ep-11",
    "https://www.southpark.de/folgen/yi4pad/south-park-fantasieland-episode-iii-staffel-11-ep-12",
    "https://www.southpark.de/folgen/xv5ktr/south-park-guitar-queer-o-staffel-11-ep-13",
    "https://www.southpark.de/folgen/5uz0vg/south-park-die-liste-staffel-11-ep-14"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-11');
  }
}
export const getSeasonMeta12 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/n9jsjf/south-park-aerger-mit-den-mandeln-staffel-12-ep-1",
    "https://www.southpark.de/folgen/3cgswn/south-park-britney-s-neuer-look-staffel-12-ep-2",
    "https://www.southpark.de/folgen/4r4367/south-park-katerstimmung-staffel-12-ep-3",
    "https://www.southpark.de/folgen/u1yv8w/south-park-kanada-im-streik-staffel-12-ep-4",
    "https://www.southpark.de/folgen/327ba3/south-park-huch-ein-penis-staffel-12-ep-5",
    "https://www.southpark.de/folgen/u2xk6s/south-park-keine-verbindung-staffel-12-ep-6",
    "https://www.southpark.de/folgen/6hs21a/south-park-super-phun-thyme-staffel-12-ep-7",
    "https://www.southpark.de/folgen/zwjhca/south-park-das-china-problem-staffel-12-ep-8",
    "https://www.southpark.de/folgen/16pd0d/south-park-busenfeinde-staffel-12-ep-9",
    "https://www.southpark.de/folgen/hg0bib/south-park-pandemic-staffel-12-ep-10",
    "https://www.southpark.de/folgen/akix98/south-park-pandemic-2-the-startling-staffel-12-ep-11",
    "https://www.southpark.de/folgen/dt5skl/south-park-obama-s-eleven-staffel-12-ep-12",
    "https://www.southpark.de/folgen/x6u02r/south-park-elementary-school-musical-staffel-12-ep-13",
    "https://www.southpark.de/folgen/tt4m8l/south-park-butters-im-bann-der-daemonen-staffel-12-ep-14"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-12');
  }
}
export const getSeasonMeta13 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/doonr4/south-park-der-ring-staffel-13-ep-1",
    "https://www.southpark.de/folgen/0dx5kg/south-park-der-coon-staffel-13-ep-2",
    "https://www.southpark.de/folgen/9do3gw/south-park-margaritaville-staffel-13-ep-3",
    "https://www.southpark.de/folgen/vyruue/south-park-queeft-los-staffel-13-ep-4",
    "https://www.southpark.de/folgen/bgla3i/south-park-leck-mich-am-staebchen-staffel-13-ep-5",
    "https://www.southpark.de/folgen/oki0th/south-park-pinewood-derby-staffel-13-ep-6",
    "https://www.southpark.de/folgen/8qplt2/south-park-kaept-n-fettbart-staffel-13-ep-7",
    "https://www.southpark.de/folgen/k2g54a/south-park-tote-promis-staffel-13-ep-8",
    "https://www.southpark.de/folgen/mphf21/south-park-butters-ober-bitch-staffel-13-ep-9",
    "https://www.southpark.de/folgen/5h5in2/south-park-ringen-um-wrestling-staffel-13-ep-10",
    "https://www.southpark.de/folgen/lzz69d/south-park-der-suendenwal-staffel-13-ep-11",
    "https://www.southpark.de/folgen/wpmnpk/south-park-schwule-schwuchteln-staffel-13-ep-12",
    "https://www.southpark.de/folgen/81p0af/south-park-der-mit-dem-schlumpf-tanzt-staffel-13-ep-13",
    "https://www.southpark.de/folgen/xenush/south-park-pipi-park-staffel-13-ep-14"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-13');
  }
}
export const getSeasonMeta14 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/7k3t00/south-park-sexual-healing-staffel-14-ep-1",
    "https://www.southpark.de/folgen/rb5qgf/south-park-als-die-kacke-pipi-musste-staffel-14-ep-2",
    "https://www.southpark.de/folgen/x5mqiz/south-park-thc-versus-kfc-staffel-14-ep-3",
    "https://www.southpark.de/folgen/1hc2pe/south-park-du-hast-0-freunde-staffel-14-ep-4",
    // "https://www.southpark.de/folgen/uxg9g7/south-park-200-staffel-14-ep-5",
    // "https://www.southpark.de/folgen/wrosbx/south-park-201-staffel-14-ep-6",
    "https://www.southpark.de/folgen/lxnxlb/south-park-krueppel-camp-staffel-14-ep-7",
    "https://www.southpark.de/folgen/hmaufp/south-park-arm-aber-daemlich-staffel-14-ep-8",
    "https://www.southpark.de/folgen/ueimun/south-park-so-n-jersey-ding-staffel-14-ep-9",
    "https://www.southpark.de/folgen/l7svnd/south-park-insheeption-staffel-14-ep-10",
    "https://www.southpark.de/folgen/5xx4ao/south-park-der-coon-2-staffel-14-ep-11",
    "https://www.southpark.de/folgen/2lhwyz/south-park-mysterion-schlaegt-zurueck-staffel-14-ep-12",
    "https://www.southpark.de/folgen/avmdp8/south-park-der-coon-vs-der-coon-and-friends-staffel-14-ep-13",
    "https://www.southpark.de/folgen/dsbhg9/south-park-creme-fraiche-staffel-14-ep-14"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-14');
  }
}
export const getSeasonMeta15 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/j6a6zs/south-park-humancentipad-staffel-15-ep-1",
    "https://www.southpark.de/folgen/9xrwb4/south-park-funnybot-staffel-15-ep-2",
    "https://www.southpark.de/folgen/96vz9g/south-park-pudding-royal-staffel-15-ep-3",
    "https://www.southpark.de/folgen/axbak0/south-park-t-m-i-staffel-15-ep-4",
    "https://www.southpark.de/folgen/poic89/south-park-crack-baby-basketball-staffel-15-ep-5",
    "https://www.southpark.de/folgen/dhi2tb/south-park-city-sushi-staffel-15-ep-6",
    "https://www.southpark.de/folgen/pxvz34/south-park-hoert-sich-scheisse-an-staffel-15-ep-7",
    "https://www.southpark.de/folgen/2b4m4s/south-park-arschburger-staffel-15-ep-8",
    "https://www.southpark.de/folgen/rcs4ge/south-park-der-letzte-meheekaner-staffel-15-ep-9",
    "https://www.southpark.de/folgen/yhhd0f/south-park-barsch-zu-mund-staffel-15-ep-10",
    "https://www.southpark.de/folgen/1nq9xv/south-park-brodway-bros-staffel-15-ep-11",
    "https://www.southpark.de/folgen/k5327t/south-park-1-staffel-15-ep-12",
    "https://www.southpark.de/folgen/ex6roo/south-park-erntedank-und-doku-drama-staffel-15-ep-13",
    "https://www.southpark.de/folgen/t9jqji/south-park-immer-aerger-mit-proll-trash-staffel-15-ep-14"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-15');
  }
}
export const getSeasonMeta16 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/c98dqj/south-park-rueckwaerts-reiten-staffel-16-ep-1",
    "https://www.southpark.de/folgen/by1nbe/south-park-wer-hat-zuerst-gerochen-staffel-16-ep-2",
    "https://www.southpark.de/folgen/g9h6mq/south-park-faith-hilling-staffel-16-ep-3",
    "https://www.southpark.de/folgen/f756rp/south-park-judapacabra-staffel-16-ep-4",
    "https://www.southpark.de/folgen/0lctr4/south-park-butters-eier-staffel-16-ep-5",
    "https://www.southpark.de/folgen/9vau76/south-park-ziplining-staffel-16-ep-6",
    "https://www.southpark.de/folgen/iyw8ps/south-park-armor-eric-staffel-16-ep-7",
    "https://www.southpark.de/folgen/x8uh1a/south-park-sarcastaball-staffel-16-ep-8",
    "https://www.southpark.de/folgen/egyait/south-park-eine-hohle-bar-staffel-16-ep-9",
    "https://www.southpark.de/folgen/tyqohz/south-park-gasmaske-staffel-16-ep-10",
    "https://www.southpark.de/folgen/hrno4n/south-park-urlaub-mit-kenny-butters-staffel-16-ep-11",
    "https://www.southpark.de/folgen/bghu33/south-park-ein-alptraum-an-halloween-staffel-16-ep-12",
    "https://www.southpark.de/folgen/1se5q4/south-park-ein-toller-applaus-staffel-16-ep-13",
    "https://www.southpark.de/folgen/1oyb2s/south-park-waehlt-obama-staffel-16-ep-14"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-16');
  }
}
export const getSeasonMeta17 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/8motqv/south-park-lass-los-die-nsa-liebt-dich-staffel-17-ep-1",
    "https://www.southpark.de/folgen/4sa1hk/south-park-infotainment-moerderpornos-staffel-17-ep-2",
    "https://www.southpark.de/folgen/mbk94a/south-park-world-war-zimmerman-staffel-17-ep-3",
    "https://www.southpark.de/folgen/ski9r6/south-park-goth-kids-3-staffel-17-ep-4",
    "https://www.southpark.de/folgen/dpkd3j/south-park-die-zaehmung-des-widerspenstigen-spaltes-staffel-17-ep-5",
    "https://www.southpark.de/folgen/1uyt33/south-park-ginger-kuh-staffel-17-ep-6",
    "https://www.southpark.de/folgen/g3ceb7/south-park-die-red-robin-hochzeit-staffel-17-ep-7",
    "https://www.southpark.de/folgen/tz6dfn/south-park-das-lied-von-arsch-und-feuer-staffel-17-ep-8",
    "https://www.southpark.de/folgen/eimjio/south-park-titten-und-drachen-staffel-17-ep-9",
    "https://www.southpark.de/folgen/pp7udu/south-park-der-hobbit-staffel-17-ep-10"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-17');
  }
}
export const getSeasonMeta18 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/q743k3/south-park-leckt-euch-selbst-staffel-18-ep-1",
    "https://www.southpark.de/folgen/2opbg6/south-park-die-cissy-staffel-18-ep-3",
    "https://www.southpark.de/folgen/7lho6r/south-park-glutenfreies-ebola-staffel-18-ep-2",
    "https://www.southpark.de/folgen/muya48/south-park-handicar-staffel-18-ep-4",
    "https://www.southpark.de/folgen/vb9a1j/south-park-der-magische-busch-staffel-18-ep-5",
    "https://www.southpark.de/folgen/jy5lbq/south-park-freemium-gibt-s-nicht-umsonst-staffel-18-ep-6",
    "https://www.southpark.de/folgen/y3uvvc/south-park-die-hausarrest-schleife-staffel-18-ep-7",
    "https://www.southpark.de/folgen/p9i8uw/south-park-piep-hahn-magic-staffel-18-ep-8",
    "https://www.southpark.de/folgen/2bf9a5/south-park-hashtag-aufwaermen-staffel-18-ep-9",
    "https://www.southpark.de/folgen/ndr2at/south-park-froehliche-hologramme-staffel-18-ep-10"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-18');
  }
}
export const getSeasonMeta19 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/h4o269/south-park-umwerfend-und-mutig-staffel-19-ep-1",
    "https://www.southpark.de/folgen/dfdwfl/south-park-wo-ist-mein-land-hin-staffel-19-ep-2",
    "https://www.southpark.de/folgen/v9t3m6/south-park-die-mieseste-gegend-der-stadt-staffel-19-ep-3",
    "https://www.southpark.de/folgen/en0srq/south-park-sag-ja-zu-yelp-staffel-19-ep-4",
    "https://www.southpark.de/folgen/oeajfq/south-park-ein-sicherer-raum-staffel-19-ep-5",
    "https://www.southpark.de/folgen/x4lqr3/south-park-tweek-und-craig-staffel-19-ep-6",
    "https://www.southpark.de/folgen/pxhhxe/south-park-boese-ninjas-staffel-19-ep-7",
    "https://www.southpark.de/folgen/pzzs15/south-park-gesponserte-inhalte-staffel-19-ep-8",
    "https://www.southpark.de/folgen/ppnf3g/south-park-werbung-und-wahrheit-staffel-19-ep-9",
    "https://www.southpark.de/folgen/exg4nv/south-park-pc-principal-tag-der-abrechnung-staffel-19-ep-10"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-19');
  }
}
export const getSeasonMeta20 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/oq0xia/south-park-weisst-du-noch-beeren-staffel-20-ep-1",
    "https://www.southpark.de/folgen/wrlyv5/south-park-skankhunt-staffel-20-ep-2",
    "https://www.southpark.de/folgen/fpihop/south-park-die-verdammten-staffel-20-ep-3",
    "https://www.southpark.de/folgen/gmluc5/south-park-schniedel-raus-staffel-20-ep-4",
    "https://www.southpark.de/folgen/zi1v0u/south-park-der-einlauf-und-daenische-delikatessen-staffel-20-ep-5",
    "https://www.southpark.de/folgen/mr5c13/south-park-fort-collins-staffel-20-ep-6",
    "https://www.southpark.de/folgen/9gzguw/south-park-herrgott-staffel-20-ep-7",
    "https://www.southpark.de/folgen/s0b5rt/south-park-nur-fuer-mitglieder-staffel-20-ep-8",
    "https://www.southpark.de/folgen/8avhur/south-park-nicht-witzig-staffel-20-ep-9",
    "https://www.southpark.de/folgen/rqcgz5/south-park-das-ende-der-serialisierung-wie-wir-sie-kennen-staffel-20-ep-10"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-20');
  }
}
export const getSeasonMeta21 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/p4ucy0/south-park-weisse-renovieren-haeuser-staffel-21-ep-1",
    "https://www.southpark.de/folgen/46s8wh/south-park-leg-es-weg-staffel-21-ep-2",
    "https://www.southpark.de/folgen/hswgo6/south-park-feiertagsspezial-staffel-21-ep-3",
    "https://www.southpark.de/folgen/5tj3ff/south-park-coon-and-friends-franchise-prequel-staffel-21-ep-4",
    "https://www.southpark.de/folgen/wrnwv5/south-park-hummelfiguren-heroin-staffel-21-ep-5",
    "https://www.southpark.de/folgen/zrbq13/south-park-hexensoehne-staffel-21-ep-6",
    "https://www.southpark.de/folgen/1f66wc/south-park-jahrestag-staffel-21-ep-7",
    "https://www.southpark.de/folgen/b67nke/south-park-moos-ferkel-staffel-21-ep-8",
    "https://www.southpark.de/folgen/9wx0zg/south-park-total-pc-staffel-21-ep-9",
    "https://www.southpark.de/folgen/l1xpyg/south-park-zermatschte-tomate-staffel-21-ep-10"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-21');
  }
}
export const getSeasonMeta22 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/ykf57h/south-park-tote-kinder-staffel-22-ep-1",
    "https://www.southpark.de/folgen/hjfzgc/south-park-ein-junge-und-ein-priester-staffel-22-ep-2",
    "https://www.southpark.de/folgen/38exov/south-park-ein-kack-problem-staffel-22-ep-3",
    "https://www.southpark.de/folgen/5b6ld6/south-park-tegridy-farms-staffel-22-ep-4",
    "https://www.southpark.de/folgen/c5x1x5/south-park-die-roller-staffel-22-ep-5",
    "https://www.southpark.de/folgen/ngow57/south-park-jetzt-wird-s-ernte-staffel-22-ep-6",
    "https://www.southpark.de/folgen/sagwyy/south-park-niemand-meint-s-ernte-staffel-22-ep-7",
    "https://www.southpark.de/folgen/xj9ctz/south-park-buddha-box-staffel-22-ep-8",
    "https://www.southpark.de/folgen/o7l8co/south-park-unerfuellt-staffel-22-ep-9",
    "https://www.southpark.de/folgen/82j5ue/south-park-fahrradparade-staffel-22-ep-10"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-22');
  }
}
export const getSeasonMeta23 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/fi4nmu/south-park-mexikanischer-joker-staffel-23-ep-1",
    "https://www.southpark.de/folgen/4yl119/south-park-band-in-china-staffel-23-ep-2",
    "https://www.southpark.de/folgen/o2ma0w/south-park-shots-staffel-23-ep-3",
    "https://www.southpark.de/folgen/wnbonm/south-park-sollen-sie-doch-glibber-essen-staffel-23-ep-4",
    "https://www.southpark.de/folgen/mrtmad/south-park-tegridy-farms-halloween-special-staffel-23-ep-5",
    "https://www.southpark.de/folgen/0ltms9/south-park-staffelfinale-staffel-23-ep-6",
    "https://www.southpark.de/folgen/5xm5ws/south-park-brettspiele-staffel-23-ep-7",
    "https://www.southpark.de/folgen/49wi25/south-park-kot-diebe-staffel-23-ep-8",
    "https://www.southpark.de/folgen/jiru42/south-park-verkabelung-staffel-23-ep-9",
    "https://www.southpark.de/folgen/z4ipl3/south-park-weihnachtsschnee-staffel-23-ep-10"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-23');
  }
}
export const getSeasonMeta24 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/yy0vjs/south-park-das-pandemie-special-staffel-24-ep-1",
    "https://www.southpark.de/folgen/0ncw71/south-park-south-parq-impfspecial-staffel-24-ep-2"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-24');
  }
}
export const getSeasonMeta25 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/vrwkb7/south-park-pyjama-tag-staffel-25-ep-1",
    "https://www.southpark.de/folgen/m339tu/south-park-der-grosse-trick-staffel-25-ep-2",
    "https://www.southpark.de/folgen/pnkrck/south-park-stadtmenschen-staffel-25-ep-3",
    "https://www.southpark.de/folgen/ohj8pg/south-park-zurueck-zum-kalten-krieg-staffel-25-ep-4",
    "https://www.southpark.de/folgen/b6uh34/south-park-hilfe-mein-teenager-hasst-mich-staffel-25-ep-5",
    "https://www.southpark.de/folgen/l3rtf5/south-park-credigree-weed-st-patrick-s-day-special-staffel-25-ep-6"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-25');
  }
}
export const getSeasonMeta26 = async () => {
  const episodes = [
    "https://www.southpark.de/folgen/7ux3j6/south-park-spring-break-staffel-26-ep-6",
    "https://www.southpark.de/folgen/2iz7sf/south-park-dikinbaus-hot-dogs-staffel-26-ep-5",
    "https://www.southpark.de/folgen/8byci4/south-park-kuenstliche-intelligenz-staffel-26-ep-4",
    "https://www.southpark.de/folgen/9niic5/south-park-japanische-toilette-staffel-26-ep-3",
    "https://www.southpark.de/folgen/3ne660/south-park-die-internationale-privatsphaeren-tour-staffel-26-ep-2",
    "https://www.southpark.de/folgen/2dhgcd/south-park-cupid-ye-staffel-26-ep-1"
  ]
  for(const episode of episodes) {
    await downloadEpisodeMetaFn(episode, './season-26');
  }
}