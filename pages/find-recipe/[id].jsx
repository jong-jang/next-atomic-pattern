import { useRouter } from 'next/router';
import clsx from 'clsx';
import styles from './detail.module.scss';
import { useRecipeById } from '@/hooks/useRecipe';
import { useEffect, useState } from 'react';
import { Title } from '@/components/atoms/text/Title';
import { Pic } from '@/components/atoms/pic/Pic';
import { Table } from '@/components/atoms/Table/Table';

function Detail() {
	const router = useRouter();
	const { id } = router.query;
	const { data } = useRecipeById(id);
	const [TableData, setTableData] = useState([]);

	useEffect(() => {
		if (data) {
			const keys = Object.keys(data);
			const filterKey1 = keys.filter((key) => key.startsWith('strIngredient'));
			const filterKey2 = filterKey1.filter((key) => data[key] !== '' && data[key] !== null);
			const ingredients = filterKey2.map((key, idx) => ({
				index: idx + 1,
				ingredient: data[key],
				measure: data[`strMeasure${idx + 1}`],
			}));

			setTableData(ingredients);
		}
	}, [data]);

	return (
		<section className={clsx(styles.detail)}>
			{data && (
				<>
					<Title type='slogan'>{data.strMeal}</Title>
					<div className={clsx(styles.picFrame)}>
						<Pic imgSrc={data.strMealThumb} />
					</div>
					<Table data={TableData} title={data.strMeal} />
				</>
			)}
		</section>
	);
}

export default Detail;
