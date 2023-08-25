import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteItemButton from '../../components/DeleteItemButton';
import EditIcon from '../../components/Icons/EditIcon';
import Styles from './ListItems.module.css';
import convertDate from '../../helpers/convertDate';
import DisplayMessage from '../../components/DisplayMessage';
import { MEASURES } from '../../utils/unitMeasures';
import ItemInfoButton from '../../components/ItemInfoButton';

const ListItems = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('unistorage')));
  const [toggleInform, setToggleInform] = useState(false);
  

  return (
    <div className={Styles.listItems}>
      <h1>Lista de items</h1>

      <Link to="/cadastrar-item" className={Styles.createItem}>Criar novo item +</Link>

      <table className={Styles.list}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th className={Styles.mobile}>Info</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Fabricação</th>
            <th>Validade</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.itemName}</td>
              <td>{item.quantity} {MEASURES[item.measureUnit].abbreviation}</td>
              <td>R$ {item.price}</td>
              <td>{convertDate(item.fabricationDate)}</td>
              <td>{item.expirationDate ? convertDate(item.expirationDate) : "Não possui"}</td>
              <td className={Styles.mobile}><ItemInfoButton item={item} /></td>
              <td><Link to={`/editar-item/${item.id}`}><EditIcon /></Link></td>
              <td><DeleteItemButton id={item.id} setItems={setItems} setToggleInform={setToggleInform} /></td>
            </tr>
          ))}

          {items.length === 0 && (<tr>
            <td colSpan={8} style={{textAlign: "center"}}>Não há itens na lista</td>
          </tr>)}
        </tbody>
      </table>
      {toggleInform && (<DisplayMessage type="inform" message="Item excluído com sucesso!!" setToggle={setToggleInform} />)}
    </div>
  )
}

export default ListItems;