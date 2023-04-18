export interface EpisodeMeta {
  index:           number;
  duration:        number;
  mediaTitle:      string;
  artistName:      string;
  tveAuthRequired: boolean;
  rss:             RSS;
  mediaGen:        MediaGen;
  src:             string;
  textTracks:      any[];
  isReady:         boolean;
  reloadMediagen:  null;
}

export interface MediaGen {
  success:           boolean;
  overlays:          any[];
  version:           string;
  beacons:           any[];
  textTracks:        any[];
  adBreaks:          any[];
  rendition:         Rendition;
  isLive:            boolean;
  isDvr:             boolean;
  cdn:               string;
  src:               string;
  actualMediaGenUrl: string;
}

export interface Rendition {
  cdn:      string;
  method:   string;
  duration: string;
  type:     string;
  src:      string;
  rdcount:  string;
}

export interface RSS {
  link:        string;
  pubDate:     string;
  airDate:     string;
  image:       Image;
  guid:        string;
  duration:    number;
  isMature:    boolean;
  group:       Group;
  title:       string;
  description: string;
}

export interface Group {
  category: Category;
  content:  string;
}

export interface Category {
  source:            string;
  sourceLink:        string;
  contentType:       string;
  franchise:         string;
  id:                string;
  episodeN:          string;
  seasonN:           string;
  playlistTitle:     string;
  playlistRepTitle:  string;
  playlistURI:       string;
  videoType:         string;
  countryName:       string;
  language:          string;
  clusterName:       string;
  seriesInSeason:    boolean;
  latestEpisode:     boolean;
  eventType:         string;
  contentDescriptor: string;
  linearPubDate:     string;
}

export interface Image {
  url: string;
}
