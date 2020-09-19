import 'reflect-metadata';
import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators';
import { FileStorageStrategy } from '../strategies/FileStorageStrategy';
import { TYPES } from './types';
import { LocalFileStorageStrategy } from '../strategies/LocalFileStorageStrategy';

const container = new Container();

container.bind<FileStorageStrategy>(TYPES.LOCAL_FILE_STORAGE).to(LocalFileStorageStrategy);

export const { lazyInject } = getDecorators(container);
