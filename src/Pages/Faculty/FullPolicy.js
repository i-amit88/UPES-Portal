import React, { useEffect, useState } from "react"
import PageTitle from "../../Components/Basic/PageTitle"
import {  Col, Row, Space, Spin, Typography, Card } from "antd"
import { useParams } from "react-router-dom"
import FacultyBase from "../../Components/Faculty/Base"
import { getPost } from "../../Helper/Post"


const FullFacultyPolicy = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        document.title = "Policy | SoCIS"
        getPost({ postId: id })
            .then((res) => {
                setData(res)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setData, id])
   
    
    return(
        <FacultyBase>
            <PageTitle title="Policy View" />
            <Space />
            { loading ? <Spin style={{ textAlign: 'center', justifyContent: 'center'}} /> :
                <Row>
                    <Col flex={0.2}>
                        <Card 
                            style={{ width: '240px', height: '70vh' }}  
                        >
                            <Typography.Title style={{ fontSize: '20px'}}>
                                Name: {data.title}
                            </Typography.Title>
                            <Typography>
                                Description: {data.excerpt}
                            </Typography>
                        </Card>
                    </Col>
                    <Col flex={3} style={{height: '70vh'}}>
                        <iframe width="100%" height="100%" src={data.attachmentFile}></iframe>
                    </Col>
                </Row> 
            }
           
           
        </FacultyBase>
    )
}

export default FullFacultyPolicy