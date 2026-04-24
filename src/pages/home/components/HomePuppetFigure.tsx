import type { HomePuppetPose } from './homeOpeningSceneState'

type HomePuppetFigureProps = {
  puppetPose: HomePuppetPose
}

export function HomePuppetFigure({ puppetPose }: HomePuppetFigureProps) {
  const visible = puppetPose !== 'hidden'
  const translateX = puppetPose === 'entering' ? '12%' : '0%'
  const translateY = puppetPose === 'entering' ? '10%' : '0%'

  return (
    <div
      aria-hidden="true"
      className="home-puppet-wrap"
      data-puppet-pose={puppetPose}
      style={{
        opacity: visible ? 1 : 0,
        transform: `translate(${translateX}, ${translateY}) scale(${visible ? 1 : 0.88})`,
      }}
    >
      <span className="home-puppet-head" />
      <span className="home-puppet-body" />
      <span className="home-puppet-arm home-puppet-arm-left" />
      <span className="home-puppet-arm home-puppet-arm-right" />
      <span className="home-puppet-stick home-puppet-stick-main" />
      <span className="home-puppet-stick home-puppet-stick-left" />
      <span className="home-puppet-stick home-puppet-stick-right" />
      <span className="home-puppet-shadow" />
    </div>
  )
}
