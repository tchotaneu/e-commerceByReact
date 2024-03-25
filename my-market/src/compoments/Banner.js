import '../styles/Banner.css'
import logo from '../assets/my_logo.png'
function Banner(){
    const title="vos produits de beauté"
    return <div className='my-banner'>
            <img src={logo} alt='vos produit de beauté' className='my-logo'/>
            <h1 className='my-title'>{title}</h1>
           </div>
}
export default  Banner