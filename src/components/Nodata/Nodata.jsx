import styles from './nodata.module.css';

const Nodata = ({style, title, src}) => {
    return (
        <div style={style} className={styles.root}>
            <div style={{backgroundImage: `url(${src})`}} className={styles.img}/>
            <div>{title}</div>
        </div>
    );
};

export default Nodata;
