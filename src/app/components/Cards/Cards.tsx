import styles from './Cards.module.css'
import Card from '../Card/Card'


export default function Cards() {
  const DavidMart = '/PeoplePhotos/front/david.jpeg'
  const DavidMartOP = '/PeoplePhotos/back/david.jpeg'
  return (
    <>1
      <div>
        <h2 className={styles.title}>Nuestro equipo</h2>
        <h3 className={styles.group}>GENERAL</h3>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 col-lg-4">
              <Card
                description="Estudiante de ingenieria informatica de la Uco"
                photo={DavidMart}
                backphoto={DavidMartOP}
                lklink="https://www.linkedin.com/in/david-martinez-76b284352/"
                ghlink="https://github.com/darkghost078"
              >
                {' '}
                David Martínez Molina{' '}
              </Card>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
