import { UntypedFormControl } from '@angular/forms';
export class DateFormControl extends UntypedFormControl {
  override setValue(value: string | null, options: any) {
    console.log(value);
    if (!value) {
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }
    // this is what enables it to continue updating form content

    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }
    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToModel: true });
      return;
    }
    super.setValue(value, { ...options, emitModelToModel: true });
  }
}
function emitModelToViewChange(
  value: any,
  arg1: any,
  emitModelToViewChange: any,
  arg3: boolean
) {
  throw new Error('Function not implemented.');
}
