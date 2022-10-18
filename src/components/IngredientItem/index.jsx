import { FiPlus, FiX } from 'react-icons/fi';
import { Container } from './styles'

export function IngredientItem({isNew, value, onClick, ...rest}) {
    return(
        <Container isNew={isNew}>
            <input 
                type="text"
                readOnly={!isNew}
                value={value}
                {...rest}
            />

            <button
                type="button"
                className={isNew ? 'button-add' : 'button-delete' }
                onClick={onClick}
            >
                { isNew ? <FiPlus/> : <FiX/> }

            </button>
        </Container>
    );
}