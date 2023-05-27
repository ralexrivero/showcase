import project_image from '../img/pj_img_001.webp';

const Card = () => {
  return (
    <article className="card">
      <img className="card-img" src={project_image} alt="product image" />
      <div>
        <h2>Titulo del producto</h2>
        <h3>Descripcion</h3>
        <button >Ver mas</button>
        <button>Codigo</button>
      </div>
    </article>
  )
}

export default Card;
