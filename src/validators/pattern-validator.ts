import { IValidatorObject, IPatternConfig } from '../main';
import { isEmpty } from 'lodash';


export class PatternValidator implements IValidatorObject {

    public name: string = 'pattern';
    public defaultMessage: string = '{{propertyName}} is not in the correct format';
    public config: IPatternConfig;

    constructor(config: IPatternConfig) {
        this.config = config;
    }

    public validate(propertyValue: any): boolean {
        if (typeof propertyValue !== 'number' && isEmpty(propertyValue)) {
            return true;
        }

        if (typeof propertyValue === 'string') {
            return propertyValue.match(this.config.pattern) !== null;
        } else {
            return true;
        }
    }
}
