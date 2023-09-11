import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';

import Base from '../Base/Base';
import PageNotFound from '../PageNotFound/PageNotFound';
import Loading from '../Loading/Loading';
import GridText from '../../components/GridText/GridText';
import GridTwoColumns from '../../components/GridTwoColumns/GridTwoColumns';
import GridContent from '../../components/GridContent/GridContent';


function Home() {
  const [page, setPage] = useState([]);

  useEffect(() => {
    const getPages = async () => {

     try {
        const data = await fetch('http://localhost:1337/api/pages/?filters[slug]=olha-so-a-minha-page&populate=deep');
        const pages = await data.json();
        const { attributes }  = pages.data[0];
        const pageData = mapData([attributes]);
        setPage(() => pageData[0]);
        console.log(page);

     } catch (error) {
        setPage(undefined);
     }
    }
    getPages();
  }, []);

  if(page ===  undefined) {
    return <PageNotFound />
  }

  if(page && !page.slug) {
    return <Loading  />
  }

  const {menu, sections, footerHtml, slug } = page;
  const { links, text, link, srcImg} = menu;

  return (
    <>
      <div>
        <Base links={links} logoData={{text, link, srcImg}} footerHtml={footerHtml}>
          <>
            {sections.map((section, index) => {
              const { component } = section;
              const key = `${slug}-${index}`

              if(component === 'section.section-two-columns') {
                return (
                  <GridTwoColumns
                    key={key}
                    {...section}
                  />
                );
              }

              if(component === 'section.section-content') {
                return (
                  <GridContent
                    key={key}
                    {...section}
                  />
                );
              }

              if(component === 'section.section-grid-text') {
                return (
                  <GridText
                    key={key}
                    {...section}
                  />
                );
              }
            })}
          </>
        </Base>
      </div>
    </>
  )
}

export default Home;
