const List = ({person}) => {
  return person.map((p)=>[<h3>{p.age}</h3>, <img src = {p.image} width="200" />, <h3>{p.name}</h3>])
}

export default List

