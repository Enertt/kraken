import styles from "./Result.module.scss";

const Result = ({isLoading, data}) => {
    return (
        <div>
            {isLoading || (data.status !== 'DONE') ?
                <div className={styles.tableRow} style={{color: '#ffffff', fontSize: 18}}>Wait for data</div>
                :
                <>
                    <div className={styles.tableRow}>
                        <div className={styles.one}>
                        <pre>
                            <span>{data.result1}</span>
                        </pre>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default Result;
