import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg"
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg"

const caseStudies = [
    {
        id: 1, 
        subtitle: 'Curology', 
        title: 'A custom formule for your skin\'s unique need',
        img: 'curology-min'
    },
    {
        id: 2, 
        subtitle: 'Yourspace', 
        title: 'Open space floor plans for next venture',
        img: 'yourspace-min'
    },
    {
        id: 3, 
        subtitle: 'Lumin', 
        title: 'For your best look ever',
        img: 'lumin-min'
    }
]

export default function Cases() {

    const imageUrl = (imgName : String) => {
        return new URL(`../assets/${imgName}.png`, import.meta.url).href
    }

  return (
    <section className="cases">
        <div className="container-fluid">
            <div className="cases-navigation">
                <div className="cases-arrow prev disabled">
                    <CasesPrev/>
                </div>
                <div className="cases-arrow next ">
                    <CasesNext/>
                </div>
            </div>
            <ul className="row">
                {caseStudies.map((caseItem)=>(
                    <li className="case" key={caseItem.id}>
                        <div className="case-details">
                            <span>{caseItem.subtitle}</span>
                            <h2>{caseItem.title}</h2>
                        </div>
                        <div className="case-image">
                            <img src={imageUrl(caseItem.img)} alt={caseItem.title} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}
