import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inputtext',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inputtext.component.html',
  styleUrl: './inputtext.component.css'
})
export class InputtextComponent {
@Input() label: string = '';

  @Input() placeholder: string = '';

  @Input() type: string = 'text';

  @Input() control!: FormControl;
  // @Input() data:any;
}
