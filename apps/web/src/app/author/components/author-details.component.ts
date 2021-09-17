import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { AuthorDetailsFragment } from '../../../generated/graphql';

@Component({
  selector: 'blog-author-details',
  template: `
    <table class="mat-table">
      <tr class="mat-row" *ngFor="let datum of details | keyvalue">
        <th class="mat-header-cell">{{ datum.key }}</th>
        <td class="mat-cell">
          <pre>{{ datum.value | json }}</pre>
        </td>
      </tr>
    </table>
  `,
  styles: [
    `
      :host {
        table {
          padding: 32px;

          th,
          td {
            padding: 4px;
          }

          th {
            text-align: right;
          }
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorDetailsComponent implements OnInit {
  @Input()
  details!: AuthorDetailsFragment;

  constructor() {}

  ngOnInit(): void {}
}
