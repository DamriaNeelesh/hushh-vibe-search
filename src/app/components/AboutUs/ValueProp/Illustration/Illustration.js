import styles from './Illustration.module.css'
export default function Illustration(props){
    return (
        <img className={`${styles.ValueProp__Image}`} src={props.image} alt="Hushh Vibe Search"></img>
    )
}