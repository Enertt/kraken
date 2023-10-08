import Sidebar from './sidebar/Sidebar'
import styles from './Page.module.scss'
import RuleOption from './rule-option/RuleOption'

const Page = () => {
	return (
		<div className={`fade_in ${styles.block}`}>

			<Sidebar />
			<RuleOption />
		</div>
	)
}

export default Page
