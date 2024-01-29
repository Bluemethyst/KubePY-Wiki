import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '',
    Svg: require('@site/static/img/invisible.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/github-mark.svg').default,
    description: (
      <>
        These docs and all of Bluemethyst's projects are open source and avalible for anyone to look at!
        Check them out <a href='https://github.com/Bluemethyst'>here</a>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/invisible.svg').default,
    description: (
      <>
       
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
