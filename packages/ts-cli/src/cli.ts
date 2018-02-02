import { getOptions } from './args';
import { serve } from './serve';

export function main() {
  const options = getOptions();

  if (options.commandOptions.command === 'serve') {

    serve(options);

  }

  if (options.commandOptions.command === 'build') {

  }

  if (options.commandOptions.command === 'new') {

  }

}

