import styles from './admin_users.module.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/ui/loader/Loader.jsx'
import AdminHomeBtn from './AdminHomeBtn.jsx'
import {post_admin_join, post_admin_stat} from "../../app/api/admin.api.js";

const AdminStat = () => {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(true)
	const [stat_loading, setStatLoading] = useState(true)
	const [start, setStart] = useState('0')
	const [end, setEnd] = useState('0')
	const [data, setData] = useState({
		bg: 0,
		dl: 0,
		dob: 0,
		ssn_full: 0,
		ssn_last: 0,
		sst_reverse: 0
	})
	console.log(start)

	useEffect(() => {
		post_admin_join()
			.then(r => {
				console.log(r)
				if (r.status !== 200) {
					navigate('/admin/login')
				} else {
					getStat()
				}
			})
			.catch(e => {
				console.log(e)
				navigate('/admin/login')
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])
	console.log(start)

	function getStat() {
		setStatLoading(true)
		post_admin_stat(start, end)
			.then(r => {
				console.log(r)
				if (r.status === 200) {
					setData(r.data)
				}
			})
			.catch(e => {
				console.log(e)
			})
			.finally(() => {
				setStatLoading(false)
			})
	}

	if (loading || stat_loading) return <Loader />

	function handleClick() {
		getStat()
	}

	return (
		<div className={styles.root}>
			<AdminHomeBtn />

			<h1>Statistics</h1>

			<div>
				<h1>BG: {data.bg}</h1>
				<h1>DL: {data.dl}</h1>
				<h1>DOB: {data.dob}</h1>
				<h1>SSN FULL: {data.ssn_full}</h1>
				<h1>SSN LAST: {data.ssn_last}</h1>
				<h1>SSN REVERSE: {data.sst_reverse}</h1>
			</div>

			<p style={{ color: 'white' }}>Enter start day</p>
			<input
				type='text'
				value={start}
				onChange={e => setStart(e.target.value)}
			/>
			<p style={{ color: 'white' }}>Enter end day</p>
			<input
				style={{ marginBottom: '10px' }}
				type='text'
				value={end}
				onChange={e => setEnd(e.target.value)}
			/>

			<button onClick={handleClick}>Display statistics</button>
		</div>
	)
}

export default AdminStat
