import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({guardaCategoria}) => {

    const opciones = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ]
    
    const [categoria, SelectNoticias] = useSelect('general', opciones);

    // submit del form
    const buscarNoticias = ev => {
        ev.preventDefault();
        guardaCategoria(categoria);
    }
    

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>

                    <SelectNoticias />

                    <div className='input-fild col s12'>
                        <input 
                            type='submit'
                            className={ `${styles.btn_block} btn-large amber darken-2`}
                            value='Buscar'
                        />

                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;