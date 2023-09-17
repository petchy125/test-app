import Feature from '../container/feature';
import OptForm from '@/app/container/opt-form';
import Hero from '../components/hero';
import Jumbotron from '../container/jumbotron';
import Faq from '@/app/container/faq';
import type { Metadata } from 'next';

import jumboData from '../../fixtures/jumbo.json';

export const metadata: Metadata = {
  title: 'Nerdflix',
  description: 'An application built by nerds',
};

export default function Page() {
  return (
    <section>
     <Hero
        className="min-[601px]:h-[114vh] min-[645px]:h-screen"
        type="static"
        src="/home-bg.jpg"
      >
        <Feature className="leading-[1.15]">
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
        </Hero>
      <Jumbotron.Container>
        {jumboData.map((jumbo) => {
          return (
            <Jumbotron
              key={jumbo.id}
              direction={
                `flex-${jumbo.direction}` as 'flex-row' | 'flex-row-reverse'
              }
            >
              <Jumbotron.Pane>
                <Jumbotron.Title>{jumbo.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{jumbo.subTitle}</Jumbotron.SubTitle>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={jumbo.image} alt={jumbo.alt} className="max-w-full" />
              </Jumbotron.Pane>
            </Jumbotron>
          );
        })}
      </Jumbotron.Container>
      <Faq />
    </section>
  );
}
