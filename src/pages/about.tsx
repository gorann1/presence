// eslint-disable-next-line import/no-extraneous-dependencies
import * as Popover from '@radix-ui/react-popover';

export default function About() {
  return (
    <>
      <Popover.Root>
        <Popover.Trigger>More info</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            Some more info…
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
