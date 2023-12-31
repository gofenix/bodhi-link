import {
  IconBrandGithub,
  IconBrandTwitter,
  IconLink,
} from '@tabler/icons-react';

export default function Header() {
  return (
    <div className="flex w-full max-w-screen-lg flex-col items-center gap-4 bg-white py-6 md:flex-row">
      <div className="flex flex-1 items-center">
        <IconLink color="#ffdb1e" />
        <div className="ml-1 text-xl font-bold">Bodhi Link Maker</div>
      </div>

      <div className="flex items-center">
        <a
          href="https://bodhi.wtf/13714"
          target="_blank"
          className="rounded border hover:bg-cyan-200"
        >
          <img width="180" height="18" src="donation.png" alt="Made by Fenix" />
        </a>
        {/* <a href="https://bodhi.wtf/13714" target="_blank">
          <img width="180" height="18" src="logo.png" alt="Made by Fenix" />
        </a> */}
        <a
          href={'https://github.com/gofenix/bodhi-link'}
          target="_blank"
          className="p-1"
        >
          <IconBrandGithub />
        </a>
        <a href={'https://twitter.com/testzfz'} target="_blank" className="p-1">
          <IconBrandTwitter />
        </a>
      </div>
    </div>
  );
}
