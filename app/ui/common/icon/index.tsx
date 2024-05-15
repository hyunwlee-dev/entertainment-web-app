import HomeIcon from "./home-icon";
import MoviesIcon from "./movies-icon"
import TvSeriesIcon from "./tv-series-icon"
import BookmarkedIcon from "./bookmarked-icon";

interface IconProps {
  className?: string;
  name: string;
  isStroke: boolean;
}

function getIcon(info: IconProps) {
  switch (info.name) {
    case 'home':
      return <HomeIcon {...info} />
    case 'movies':
      return <MoviesIcon {...info} />
    case 'tv-series':
      return <TvSeriesIcon {...info} />
    case 'bookmarked':
      return <BookmarkedIcon {...info} />
  }
}

export default function Icon({
  className,
  name,
  isStroke,
}: IconProps) {
  return (
    <>{getIcon({ className, name, isStroke })}</>
  );
}
