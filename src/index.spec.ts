/*!
 * Source https://github.com/donmahallem/json-schema-action
 */

import { expect } from 'chai';
import 'mocha';
import * as index from './index';

describe('index', (): void => {
    it('should export the BUILD_VERSION', (): void => {
        expect(index.VERSION).to.equal('__BUILD_VERSION__');
    });
});
