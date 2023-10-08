import styles from './Page.module.scss'
import DocumentationItem from './DocumentationItem'
import styles2 from './Documentation.module.scss'
import {TOKEN} from "../../app/api/app.constants.js";

const Page = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles2.type}
                 style={{color: 'white', wordBreak: 'break-all', width: '80%', flexDirection: 'column', alignItems: 'center', gap: '24px'}}>
                <div>API KEY:</div>

                <div>{localStorage.getItem(TOKEN)}</div>
            </div>
            <DocumentationItem
                title={`Full SSN`}
                type={`POST`}
                path={`/find/full_ssn`}
                parameters={`No parameters`}
                requestBody={`Application/JSON`}
                exampleValueSchema1=
                    {`{
	"FirstName": "string",
	"LastName": "string",
	"Address": "string",
	"City": "string",
	"State": "string"
}`}
                sucResponseMediaType={`Application/JSON`}
                sucResponseExampleValueSchema={`"string"`}

                errResponseMediaType={`Application/JSON`}
                errResponseExampleValueSchema=
                    {`{
	"detail": [
	  {
		"loc": [
		  "string",
		  0
		],
		"msg": "string",
		"type": "string"
	  }
	]
}`}
            />


            <DocumentationItem
                title={`Full SSN (Fetch)`}
                type={`GET`}
                path={`/find/fetch/full_ssn`}
                parameters={`Name: token(string), Description: token`}
                // requestBody={`Application/JSON`}
                // 			exampleValueSchema1=
                // {`{
                // 	"FirstName": "string",
                // 	"LastName": "string",
                // 	"Address": "string",
                // 	"City": "string",
                // 	"State": "string"
                //   }`}
                sucResponseMediaType={`Application/JSON`}
                sucResponseExampleValueSchema=
                    {`{
	"status": "PENDING",
	"result": {}
}`}

                errResponseMediaType={`Application/JSON`}
                errResponseExampleValueSchema=
                    {`{
	"detail": [
	  {
		"loc": [
		  "string",
		  0
		],
		"msg": "string",
		"type": "string"
	  }
	]
}`}
            />


            <DocumentationItem
                title={`SSN Last 4`}
                type={`POST`}
                path={`/find/last_ssn`}
                parameters={`No parameters`}
                requestBody={`Application/JSON`}
                exampleValueSchema1=
                    {`{
	"FirstName": "string",
	"LastName": "string",
	"Address": "string",
	"City": "string",
	"State": "string"
  }`}
                sucResponseMediaType={`Application/JSON`}
                sucResponseExampleValueSchema={`"string"`}

                errResponseMediaType={`Application/JSON`}
                errResponseExampleValueSchema=
                    {`{
	"detail": [
	  {
		"loc": [
		  "string",
		  0
		],
		"msg": "string",
		"type": "string"
	  }
	]
}`}
            />


            <DocumentationItem
                title={`SSN Last 4 (Fetch)`}
                type={`GET`}
                path={`/find/fetch/last_ssn`}
                parameters={`Name: token(string), Description: token`}
                // requestBody={`Application/JSON`}
                // 			exampleValueSchema1=
                // {`{
                // 	"FirstName": "string",
                // 	"LastName": "string",
                // 	"Address": "string",
                // 	"City": "string",
                // 	"State": "string"
                //   }`}
                sucResponseMediaType={`Application/JSON`}
                sucResponseExampleValueSchema=
                    {`{
	"status": "PENDING",
	"result": {}
}`}

                errResponseMediaType={`Application/JSON`}
                errResponseExampleValueSchema=
                    {`{
	"detail": [
	  {
		"loc": [
		  "string",
		  0
		],
		"msg": "string",
		"type": "string"
	  }
	]
}`}
            />


            <DocumentationItem
                title={`SSN Reverse`}
                type={`POST`}
                path={`/find/reverse_ssn`}
                parameters={`No parameters`}
                requestBody={`Application/JSON`}
                exampleValueSchema1=
                    {`{
	"ssn": "string"
}`}
                sucResponseMediaType={`Application/JSON`}
                sucResponseExampleValueSchema={`"string"`}

                errResponseMediaType={`Application/JSON`}
                errResponseExampleValueSchema=
                    {`{
	"detail": [
	  {
		"loc": [
		  "string",
		  0
		],
		"msg": "string",
		"type": "string"
	  }
	]
}`}
            />


            <DocumentationItem
                title={`SSN Reverse (Fetch)`}
                type={`GET`}
                path={`/find/fetch/last_ssn`}
                parameters={`Name: token(string), Description: token`}
                // requestBody={`Application/JSON`}
                // 			exampleValueSchema1=
                // {`{
                // 	"FirstName": "string",
                // 	"LastName": "string",
                // 	"Address": "string",
                // 	"City": "string",
                // 	"State": "string"
                //   }`}
                sucResponseMediaType={`Application/JSON`}
                sucResponseExampleValueSchema=
                    {`{
	"status": "PENDING",
	"result": {}
}`}

                errResponseMediaType={`Application/JSON`}
                errResponseExampleValueSchema=
                    {`{
	"detail": [
	  {
		"loc": [
		  "string",
		  0
		],
		"msg": "string",
		"type": "string"
	  }
	]
}`}
            />


            <DocumentationItem
                title={`BG`}
                type={`POST`}
                path={`/find/bg`}
                parameters={`No parameters`}
                requestBody={`Application/JSON`}
                exampleValueSchema1=
                    {`{
	"FirstName": "string",
	"LastName": "string",
	"Address": "string",
	"City": "string",
	"State": "string"
}`}
                sucResponseMediaType={`Application/JSON`}
                sucResponseExampleValueSchema={`"string"`}

                errResponseMediaType={`Application/JSON`}
                errResponseExampleValueSchema=
                    {`{
	"detail": [
	  {
		"loc": [
		  "string",
		  0
		],
		"msg": "string",
		"type": "string"
	  }
	]
  }`}
            />


            <DocumentationItem
                title={`BG (Fetch)`}
                type={`GET`}
                path={`/find/fetch/bg`}
                parameters={`Name: token(string), Description: token`}
                // requestBody={`Application/JSON`}
                // 			exampleValueSchema1=
                // {`{
                // 	"FirstName": "string",
                // 	"LastName": "string",
                // 	"Address": "string",
                // 	"City": "string",
                // 	"State": "string"
                //   }`}
                sucResponseMediaType={`Application/JSON`}
                sucResponseExampleValueSchema=
                    {`{
	"status": "PENDING",
	"result": {}
}`}

                errResponseMediaType={`Application/JSON`}
                errResponseExampleValueSchema=
                    {`{
	"detail": [
	  {
		"loc": [
		  "string",
		  0
		],
		"msg": "string",
		"type": "string"
	  }
	]
}`}
            />


            <DocumentationItem
                title={`DL`}
                type={`POST`}
                path={`/find/dl`}
                parameters={`No parameters`}
                requestBody={`Application/JSON`}
                exampleValueSchema1=
                    {`{
	"FirstName": "string",
	"LastName": "string",
	"Address": "string",
	"City": "string",
	"State": "string"
}`}
                sucResponseMediaType={`Application/JSON`}
                sucResponseExampleValueSchema={`"string"`}

                errResponseMediaType={`Application/JSON`}
                errResponseExampleValueSchema=
                    {`{
	"detail": [
	  {
		"loc": [
		  "string",
		  0
		],
		"msg": "string",
		"type": "string"
	  }
	]
  }`}
            />


            <DocumentationItem
                title={`DL (Fetch)`}
                type={`GET`}
                path={`/find/fetch/dl`}
                parameters={`Name: token(string), Description: token`}
                // requestBody={`Application/JSON`}
                // 			exampleValueSchema1=
                // {`{
                // 	"FirstName": "string",
                // 	"LastName": "string",
                // 	"Address": "string",
                // 	"City": "string",
                // 	"State": "string"
                //   }`}
                sucResponseMediaType={`Application/JSON`}
                sucResponseExampleValueSchema=
                    {`{
	"status": "PENDING",
	"result": {}
}`}

                errResponseMediaType={`Application/JSON`}
                errResponseExampleValueSchema=
                    {`{
	"detail": [
	  {
		"loc": [
		  "string",
		  0
		],
		"msg": "string",
		"type": "string"
	  }
	]
}`}
            />


            <DocumentationItem
                title={`DOB`}
                type={`POST`}
                path={`/find/dob`}
                parameters={`No parameters`}
                requestBody={`Application/JSON`}
                exampleValueSchema1=
                    {`{
	"FirstName": "string",
	"LastName": "string",
	"Address": "string",
	"City": "string",
	"State": "string"
}`}
                sucResponseMediaType={`Application/JSON`}
                sucResponseExampleValueSchema={`"string"`}

                errResponseMediaType={`Application/JSON`}
                errResponseExampleValueSchema=
                    {`{
	"detail": [
	  {
		"loc": [
		  "string",
		  0
		],
		"msg": "string",
		"type": "string"
	  }
	]
  }`}
            />


            <DocumentationItem
                title={`DL (Fetch)`}
                type={`GET`}
                path={`/find/fetch/dl`}
                parameters={`Name: token(string), Description: token`}
                // requestBody={`Application/JSON`}
                // 			exampleValueSchema1=
                // {`{
                // 	"FirstName": "string",
                // 	"LastName": "string",
                // 	"Address": "string",
                // 	"City": "string",
                // 	"State": "string"
                //   }`}
                sucResponseMediaType={`Application/JSON`}
                sucResponseExampleValueSchema=
                    {`{
	"status": "PENDING",
	"result": {}
}`}

                errResponseMediaType={`Application/JSON`}
                errResponseExampleValueSchema=
                    {`{
	"detail": [
	  {
		"loc": [
		  "string",
		  0
		],
		"msg": "string",
		"type": "string"
	  }
	]
}`}
            />
        </div>
    )
}

export default Page
