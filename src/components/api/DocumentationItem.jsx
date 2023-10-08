import styles from './Documentation.module.scss'

const DocumentationItem = (props) => {

    let type
    if(props.type === 'POST'){
        type = <span className={styles.spanTypeG}>{`POST`}</span>
    }else if(props.type === 'GET'){
        type = <span className={styles.spanTypeB}>{`GET`}</span>
    }

    return(
        <div className={styles.DocumentationItemWrapper}>
            <div>
                <div className={styles.type}>
                    <span>{`${props.title}`}</span>
                    {type}
                    <span>{`${props.path}`}</span> 
                </div>

                <div className={styles.parameters}>
                    <span>Parameters:</span>
                    <span>{`${props.parameters}`}</span>
                </div>

                {props.requestBody !== undefined && props.requestBody !== null ? 

                <div className={styles.requestBody}>
                    <span>Request body:</span>
                    <span>{`${props.requestBody}`}</span>
                </div>
                :
                null
                }
                
                {props.exampleValueSchema1 !== undefined && props.exampleValueSchema1 !== null ? 
                <div className={styles.example}>
                    <span>Example Value Schema</span>
                
                    <pre>
                        {`${props.exampleValueSchema1}`}
                    </pre>  
                </div>
                :
                null
                }
                

                <div className={styles.responses}>
                    <span className={styles.responsesTitle}>Responses</span>
                    <div className={styles.tableTitle}>
                        <span className={styles.one}>Code</span>
                        <span className={styles.two}>Description</span>
                    </div>

                    <div className={styles.successfulResponse}>
                        <div className={styles.one}>
                            <span>200</span>
                        </div>

                        <div className={styles.successfulResponse_description}>
                            <span>Successful Response</span>
                            <span>{`Media type: ${props.sucResponseMediaType}`}</span>

                            <div className={styles.example}>
                                <span>Example Value Schema</span>
                                <pre>
                                    {`${props.sucResponseExampleValueSchema}`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {props.errResponseMediaType !== undefined &&
                     props.errResponseExampleValueSchema !== undefined &&
                     props.errResponseExampleValueSchema !== null &&
                     props.errResponseExampleValueSchema !== null

                    ? 
                        <div className={styles.unsuccessfulResponse}>
                            <div className={styles.one}>
                                <span>422</span>
                            </div>

                            <div className={styles.unsuccessfulResponse_description}>
                                <span>Validation Error</span>
                                <span>{`Media type: ${props.errResponseMediaType}`}</span>

                                <div className={styles.example}>
                                    <span>Example Value Schema</span>
                                    <pre>{`${props.errResponseExampleValueSchema}`}</pre>
                                </div>
                            </div>
                        </div>
                    :
                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default DocumentationItem