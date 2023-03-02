import './styles.css';

const reports = [
  { 
    codigo: 100, titulo: "Aliquip velit id consequat", 
    texto: `Ut aliquip sit elit esse ut culpa est dolor cillum veniam est eu amet. Deserunt veniam reprehenderit exercitation eu officia. 
          Do enim ut sint ex commodo laborum. Aliquip velit id consequat occaecat tempor ex aliqua ex adipisicing. Cillum Lorem proident sit sint enim occaecat quis nulla deserunt sint. Voluptate sunt velit do ut enim ad qui. Elit elit minim voluptate sunt adipisicing anim.
          aborum irure occaecat laborum qui est ullamco deserunt adipisicing sunt voluptate ea exercitation ut sint.` 
  },
  { 
    codigo: 200, titulo: "Do enim ut sint", 
    texto: `Ut aliquip sit elit esse ut culpa est dolor cillum veniam est eu amet. Deserunt veniam reprehenderit exercitation eu officia. 
          Do enim ut sint ex commodo laborum. Aliquip velit id consequat occaecat tempor ex aliqua ex adipisicing. Cillum Lorem proident sit sint enim occaecat quis nulla deserunt sint. Voluptate sunt velit do ut enim ad qui. Elit elit minim voluptate sunt adipisicing anim.
          aborum irure occaecat laborum qui est ullamco deserunt adipisicing sunt voluptate ea exercitation ut sint.` 
  },
  { 
    codigo: 300, titulo: "This is Sparta!!!", 
    texto: `Ut aliquip sit elit esse ut culpa est dolor cillum veniam est eu amet. Deserunt veniam reprehenderit exercitation eu officia. 
          Do enim ut sint ex commodo laborum. Aliquip velit id consequat occaecat tempor ex aliqua ex adipisicing. Cillum Lorem proident sit sint enim occaecat quis nulla deserunt sint. Voluptate sunt velit do ut enim ad qui. Elit elit minim voluptate sunt adipisicing anim.
          aborum irure occaecat laborum qui est ullamco deserunt adipisicing sunt voluptate ea exercitation ut sint.` 
  },
];


export default function Relatorios() {
  return (
    <>
      <h1 className='titulo-relatorio'>
      Relatórios de Criptomoedas
      </h1>
      <div>
        {
          reports.map(relat => { 
            return (
              <div className='relatorio-cartao' key={relat.codigo}>
                <span className='sp-codigo'> Código: { relat.codigo } </span>
                <span className='sp-titulo'> { relat.titulo } </span>
                <span className='sp-texto'> { relat.texto } </span>
              </div>
            )
          })
        }
      </div>
    </>
    
  )
}
