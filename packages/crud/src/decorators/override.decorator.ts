import { BaseRouteName } from '../types/base-route-name.type';
import { OVERRIDE_METHOD_METADATA } from '../constants';

/**
 * mark a method to be overrided
 * @param name the route name, such as "getManyBase"
 * @returns
 * @example
 *   \@Override()
 *   getMany(){}
 *   // metadata = "getManyBase"
 *
 * @example
 *   \@override("getManyBase")
 *   getUsers(){}
 *   // metadata = "getManyBase"
 *
 */
export const Override =
  (name?: BaseRouteName) => (target, key, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata(OVERRIDE_METHOD_METADATA, name || `${key}Base`, target[key]);
    return descriptor;
  };
