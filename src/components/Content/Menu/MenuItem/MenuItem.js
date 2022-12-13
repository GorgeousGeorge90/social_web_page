export const MenuItem = ({img, text, img1=null})=> {
    return (<a href={'/'}>
        <img src={img} alt='pic'/>
        <span>{text}</span>
        {
            img1 ? <div><img src={img1} alt="pic"/></div>: null
        }
    </a>)
}