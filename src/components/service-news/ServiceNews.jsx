import Block from './card/Block'
import styles from './ServiceNews.module.scss'
import { useGetUserNewsQuery } from '../../app/api/api.js'

const ServiceNews = () => {
	const { data } = useGetUserNewsQuery()
	return (
		<div className={styles.block}>
			<div className={styles.title}>
				<p>ServiceNews</p>
			</div>
			<div className={styles.blockList}>
				{data?.map((news, index) => (
					<Block
						key={index}
						markSvg={
							news.sender === 'Admin'
								? 'Marker-red-icon.svg'
								: 'Marker-green-icon.svg'
						}
						index={news.sender}
						date={news.data}
						title={news.header}
						role={news.sender}
					>
						{news.message}
					</Block>
				))}
			</div>
		</div>
	)
}

export default ServiceNews
