import { Container } from 'inversify';
import { REFS } from '@/types';
import * as M from '@/types/models';

import { AppModel } from '@/models/AppModel';

const container = new Container();
export default container;

container.bind<M.IModelApp>(REFS.AppModel).to(AppModel);
