import ContentLoader from 'react-content-loader';

export const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={340}
    height={150}
    viewBox='0 0 340 150'
    backgroundColor='#e2dfdf'
    foregroundColor='#f4f0f0'
    {...props}
  >
    <rect
      x='120'
      y='21'
      rx='8'
      ry='8'
      width='150'
      height='25'
    />
    <rect
      x='300'
      y='36'
      rx='62'
      ry='62'
      width='30'
      height='30'
    />
    <rect
      x='120'
      y='64'
      rx='8'
      ry='8'
      width='150'
      height='17'
    />
    <circle
      cx='50'
      cy='50'
      r='50'
    />
  </ContentLoader>
);
