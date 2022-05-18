import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RefCurrencyEntity } from '../../models/refCurrencyEntity';
import { SpecificationOriginTypeEnum } from '../../models/specificationOriginTypeEnum';
import { SpecificationsEntity } from '../../models/specificationsEntity';
import { SpecificationStatusEnum } from '../../models/specificationStatusEnum';
import { SpecifOneViewModel } from '../../models/specifOne';

@Component({
  selector: 'erg-specifications-root',
  templateUrl: './specifications-root.component.html',
  styleUrls: ['./specifications-root.component.scss']
})
export class SpecificationsRootComponent implements OnInit {
  specificationForm!: FormGroup;
  currencies: RefCurrencyEntity[] = [
    {
      Id: 87,
      Name: "тенге"
    },
    {
      Id: 130,
      Name: "Доллар"
    },
    {
      Id: 47,
      Name: "Рубль"
    },
    {
      Id: 160,
      Name: "Евро"
    },
  ]
  specif!: SpecificationsEntity;
  model: SpecifOneViewModel = new SpecifOneViewModel();

  constructor() { }

  ngOnInit(): void {
    this.SpecifOneViewModel_Loaded();
    this.SetVisibilty();
  }

  private SpecifOneViewModel_Loaded() {
   this.specif = {
      NUM_SPECIFIC:'T/12993/12/12/22',
      LOT_NUM_SAP: 2434234,
      ISDELETED: 0,
      MAIN_CATEGORY:1,
      MAIN_CATEGORY_TRU_ID:1,
      ORIGIN_TYPE: SpecificationOriginTypeEnum.LotSAPBased,
      ORIGIN_TYPE_TEXT: 'Спецификация основанная на Лот (SAP)',
      PURCHASE_TYPE: 2,
      REF_CURRENCY_ID:87,
      STATUS: SpecificationStatusEnum.Formed,
      STATUS_TEXT:'Сформирована',
    };

    this.model = {
      ...this.model,
      Specif: this.specif,
      SpecifExecTxt:  "Иванов Иван",
      RefCurrencies: this.currencies,
      ForAnnons: false
    }
    this.initForm();
  }

  private initForm() {
    this.specificationForm = new FormGroup({
      Specif: new FormGroup({
        NUM_SPECIFIC: new FormControl(),
        LOT_NUM_SAP: new FormControl(),
        ISDELETED: new FormControl(),
        MAIN_CATEGORY: new FormControl(),
        MAIN_CATEGORY_TRU_ID: new FormControl(),
        ORIGIN_TYPE: new FormControl(),
        ORIGIN_TYPE_TEXT: new FormControl(),
        PURCHASE_TYPE: new FormControl(),
        REF_CURRENCY_ID: new FormControl(null, Validators.required),
        STATUS: new FormControl(),
        STATUS_TEXT: new FormControl(),
        PURCHASE_MANNER_ID: new FormControl(),
        PRE_PURCHASE_MANNER_ID: new FormControl(),
        IS_EMERGENCY_PURCHASE: new FormControl(),
      }),
      SpecifExecTxt: new FormControl(),
      RefCurrencies: new FormControl([]),
      ForAnnons: new FormControl(),
      blShowInternalFields: new FormControl(true),
      IsFrameAgreement: new FormControl(),
    })
    this.specificationForm.patchValue({
      ...this.model
    })
    this.Specif.patchValue({
      ...this.specif
    })
  }

  private SetVisibilty(): void{
  }

  public CustomDeleteButton_Click(): void  {

  }

  public SaveButton_Click(): void  {
      if (this.specificationForm.invalid)   
         return alert('Ощибка валидации')
      console.log("formValues: ", this.specificationForm.value)
      alert('Форма отправлена, в консоль)')
  }

  public AddButton_Click(): void
  {

  }

  public SetupLayoutSize(originType: SpecificationOriginTypeEnum): void
  {

  }

  get Specif(): FormGroup {
    return this.specificationForm.get('Specif') as FormGroup;
  }
}


