import { useRouter } from 'next/router';
import clsx from 'clsx';
import styles from './detail.module.scss';

function Detail() {
	const router = useRouter();
	const { id } = router.query;
	console.log(id);

	return <section className={clsx(styles.detail)}></section>;
}

export default Detail;
