import Head from 'next/head';
import clsx from 'clsx';
import styles from './favorait.module.scss';

function Favorait() {
	return (
		<>
			<Head>
				<title>Favoraite Page</title>
			</Head>

			<section className={clsx(styles.favoraitePage)}></section>
		</>
	);
}

export default Favorait;
