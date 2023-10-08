import Dropdown from '../../faq-page/dropdown/Dropdown'
import styles from './RuleOption.module.scss'
import Block from './block/Block'
import CodeBlock from './code-block/CodeBlock'
import kraken from '/images/Kraken-photo.png'
import kraken2 from '/images/Kraken-photo-2.png'
import kraken3 from '/images/Kraken-photo-3.png'
import Notification from '../../ui/notification/Notification'
import PhotoBlock from './photo-block/PhotoBlock'

const RuleOption = () => {
	return (
		<div className={styles.block}>
			<div className={styles.title}>
				<p>Lorem ipsum dolor sit amet consectetur.</p>
			</div>
			<div className={styles.section}>
				<div className={styles.text}>
					<p>
						Lorem ipsum dolor sit amet consectetur. Rutrum bibendum eget
						ultricies volutpat quis. Interdum arcu quisque sed purus ut amet.
						Vitae etiam neque pulvinar orci morbi ut faucibus. Vitae sed amet
						tempor ac in enim mattis egestas. A vitae duis pharetra in diam.
						Eget senectus nibh mauris est mauris vestibulum sed tortor risus.
						Etiam sit in ac at massa. Eu dapibus rutrum semper pulvinar
						fringilla adipiscing tortor. Ullamcorper iaculis id pulvinar donec
						scelerisque amet commodo sodales enim. Consectetur vulputate nullam
						in et turpis sed est. Et nunc eget tempus eu. Sit ut aliquam
						accumsan arcu aliquet. Sit eget accumsan pretium vulputate facilisis
						tortor odio gravida. Magna elit ac tempus vehicula integer eleifend.
						Et ipsum habitant condimentum libero nibh mauris id purus tempor.
						Eget.
					</p>
				</div>
				<div className={styles.blockList}>
					<Block>
						Lorem ipsum dolor sit amet consectetur. Rutrum bibendum eget
						ultricies volutpat quis. Interdum arcu quisque sed purus ut amet.
						Vitae etiam neque pulvinar orci morbi ut faucibus. Vitae sed amet
						tempor ac in enim mattis egestas. A vitae duis pharetra in diam.{' '}
					</Block>
					<Block>
						Lorem ipsum dolor sit amet consectetur. Rutrum bibendum eget
						ultricies volutpat quis. Interdum arcu quisque sed purus ut amet.
						Vitae etiam neque pulvinar orci morbi ut faucibus. Vitae sed amet
						tempor ac in enim mattis egestas. A vitae duis pharetra in diam.{' '}
					</Block>
					<Block>
						Lorem ipsum dolor sit amet consectetur. Rutrum bibendum eget
						ultricies volutpat quis. Interdum arcu quisque sed purus ut amet.
						Vitae etiam neque pulvinar orci morbi ut faucibus. Vitae sed amet
						tempor ac in enim mattis egestas. A vitae duis pharetra in diam.{' '}
					</Block>
				</div>
			</div>
			<div className={styles.title}>
				<p>Lorem ipsum dolor sit amet consectetur.</p>
			</div>
			<div className={styles.section}>
				<div className={styles.dropdownList}>
					<Dropdown
						title='Lorem ipsum dolor sit amet consectetur.'
						background={true}
					>
						Lorem ipsum dolor sit amet consectetur. Lacus ultricies morbi quis
						in mattis aliquet mi in. Aliquet aliquet odio ultricies egestas
						nulla sagittis vestibulum. Etiam elit eu pellentesque gravida
						euismod risus viverra nunc. Mauris praesent vestibulum amet felis
						bibendum a posuere. Mollis sit sem aliquam augue adipiscing mauris
						sapien nisi risus. Volutpat vitae eros in nec at. Morbi vulputate in
						auctor amet faucibus fermentum sit urna eleifend. Odio volutpat
						euismod dignissim ut. Ac dolor quisque dignissim ut leo quam
						posuere. Velit vitae placerat morbi tellus consequat massa tincidunt
						sed eu. Praesent vel elit et tortor sodales et. Quis egestas mauris
						proin vestibulum morbi. Velit integer vivamus urna tortor quis et
						libero sed. Neque ut nisl tincidunt semper nunc.
					</Dropdown>
					<Dropdown
						title='Lorem ipsum dolor sit amet consectetur.'
						background={true}
					>
						Lorem ipsum dolor sit amet consectetur. Lacus ultricies morbi quis
						in mattis aliquet mi in. Aliquet aliquet odio ultricies egestas
						nulla sagittis vestibulum. Etiam elit eu pellentesque gravida
						euismod risus viverra nunc. Mauris praesent vestibulum amet felis
						bibendum a posuere. Mollis sit sem aliquam augue adipiscing mauris
						sapien nisi risus. Volutpat vitae eros in nec at. Morbi vulputate in
						auctor amet faucibus fermentum sit urna eleifend. Odio volutpat
						euismod dignissim ut. Ac dolor quisque dignissim ut leo quam
						posuere. Velit vitae placerat morbi tellus consequat massa tincidunt
						sed eu. Praesent vel elit et tortor sodales et. Quis egestas mauris
						proin vestibulum morbi. Velit integer vivamus urna tortor quis et
						libero sed. Neque ut nisl tincidunt semper nunc.
					</Dropdown>
				</div>
				<div>
					<CodeBlock></CodeBlock>
				</div>
				<div className={styles.images}>
					<PhotoBlock
						img={kraken2}
						description={'Lorem ipsum dolor sit amet consectetur.'}
					/>
					<PhotoBlock
						img={kraken3}
						description={'Lorem ipsum dolor sit amet consectetur.'}
					/>
					<PhotoBlock
						img={kraken}
						description={'Lorem ipsum dolor sit amet consectetur.'}
					/>
				</div>
				<div className={styles.notify}>
					<Notification title={'Notification'}>
						Lorem ipsum dolor sit amet consectetur. Dui est odio tellus
						elementum convallis. Ut augue arcu feugiat sociis mauris laoreet
						tristique. Mauris vel consectetur nec sit at. Risus dui risus
						dignissim sed. Enim sed lectus leo mattis ullamcorper tristique
						volutpat vitae. Tortor urna dolor velit commodo fusce netus purus
						quis venenatis. Gravida eget cursus bibendum felis. Ac tellus risus
						convallis porttitor.
					</Notification>
				</div>
			</div>
		</div>
	)
}

export default RuleOption
