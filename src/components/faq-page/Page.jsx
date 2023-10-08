import kraken from '/Kraken-2.svg'
import styles from './Page.module.scss'
import Form from './faq-page-search-form/Form'
import Card from './card/Card'
import flagsDisable from './card/assets/Flags-disable.svg'
import coinsDisable from './card/assets/Coins-disable.svg'
import walletDisable from './card/assets/Wallet-disable.svg'
import stoneDisable from './card/assets/Stone-disable.svg'
import flagsActive from './card/assets/Flags-active.svg'
import coinsActive from './card/assets/Coins-active.svg'
import walletActive from './card/assets/Wallet-active.svg'
import stoneActive from './card/assets/Stone-active.svg'
import Dropdown from './dropdown/Dropdown'
import { useState } from 'react'

const Page = () => {
	const [activeBlock, setActiveBlock] = useState(0)

	const handleCardClick = index => {
		setActiveBlock(index)
	}
	return (
		<div className={`fade_in ${styles.block}`}>
			<div>
				<img src={kraken} alt='kraken' />
			</div>
			<div className={styles.title}>
				<p>Hello, how can we help?</p>
			</div>
			<div className={styles.searchForm}>
				<Form />
			</div>
			<div className={styles.subtitle}>
				<p>Or choose a category to quickly find the help you need!</p>
			</div>
			<div className={styles.cardList}>
				<Card
					img={{ disable: flagsDisable, active: flagsActive }}
					onClick={() => handleCardClick(0)}
					active={activeBlock === 0}
				>
					Getting Started
				</Card>
				<Card
					img={{ disable: coinsDisable, active: coinsActive }}
					onClick={() => handleCardClick(1)}
					active={activeBlock === 1}
				>
					Pricing & Plan
				</Card>
				<Card
					img={{ disable: walletDisable, active: walletActive }}
					onClick={() => handleCardClick(2)}
					active={activeBlock === 2}
				>
					Sales Question
				</Card>
				<Card
					img={{ disable: stoneDisable, active: stoneActive }}
					onClick={() => handleCardClick(3)}
					active={activeBlock === 3}
				>
					Usage Guides
				</Card>
			</div>
			<div className={styles.dropdownList}>
				<Dropdown
					title={'Lorem ipsum dolor sit amet consectetur. Velit neque.'}
				>
					Lorem ipsum dolor sit amet consectetur. Lacus ultricies morbi quis in
					mattis aliquet mi in. Aliquet aliquet odio ultricies egestas nulla
					sagittis vestibulum. Etiam elit eu pellentesque gravida euismod risus
					viverra nunc. Mauris praesent vestibulum amet felis bibendum a
					posuere. Mollis sit sem aliquam augue adipiscing mauris sapien nisi
					risus. Volutpat vitae eros in nec at. Morbi vulputate in auctor amet
					faucibus fermentum sit urna eleifend. Odio volutpat euismod dignissim
					ut. Ac dolor quisque dignissim ut leo quam posuere. Velit vitae
					placerat morbi tellus consequat massa tincidunt sed eu. Praesent vel
					elit et tortor sodales et. Quis egestas mauris proin vestibulum morbi.
					Velit integer vivamus urna tortor quis et libero sed. Neque ut nisl
					tincidunt semper nunc.{' '}
				</Dropdown>
				<Dropdown
					title={'Lorem ipsum dolor sit amet consectetur. Velit neque.'}
				/>
				<Dropdown
					title={'Lorem ipsum dolor sit amet consectetur. Velit neque.'}
				/>
				<Dropdown
					title={'Lorem ipsum dolor sit amet consectetur. Velit neque.'}
				/>
			</div>
		</div>
	)
}

export default Page
