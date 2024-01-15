import type {Technologie} from '../types/technologie.type'
export class Tags {
  private _name: string
  private _technologie: Technologie[]

  constructor(name?: string, technologie?: Technologie[]) {
    this._name = name ?? ''
    this._technologie = technologie ?? []
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get technologie(): Technologie[] {
    return this._technologie
  }


  set technologie(value: Technologie[]) {
    this._technologie = value
  }
}

