import Part from './Part.jsx'

const Content = (props) => {
    return(
        <>
            <Part from_content_p={props.from_app_p1} from_content_e={props.from_app_e1}/>
            <Part from_content_p={props.from_app_p2} from_content_e={props.from_app_e2}/>
            <Part from_content_p={props.from_app_p3} from_content_e={props.from_app_e3}/>
        </>
    )
}

export default Content