import BookmarkEmptyIcon from '@icons/icon-bookmark-empty.svg';
import BookmarkFullIcon from '@icons/icon-bookmark-full.svg';
import styles from './bookmark.css';

export default function Bookmark({ isMarked = false }: { isMarked?: boolean }) {
  return (
    <div className={styles.bookmark}>
      {isMarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
    </div>
  );
}
