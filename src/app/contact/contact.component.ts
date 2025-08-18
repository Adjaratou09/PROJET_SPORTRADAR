import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('form') form!: NgForm;
  @ViewChild('resultRef') resultRef!: ElementRef;

  accessKey = '3e26c6ca-fb1d-4c99-80e0-a2effc33532c'; // Remplacez par votre vraie clé Web3Forms

  user = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    const payload = {
      ...this.user,
      access_key: this.accessKey,
      subject: "New Submission from Web3Forms"
    };

    const result = this.resultRef.nativeElement;
    result.innerHTML = 'Please wait...';
    result.classList.remove('text-red-500', 'text-green-500');
    result.classList.add('text-gray-500');

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(async (response) => {
      const json = await response.json();
      result.innerHTML = json.message;
      result.classList.remove('text-gray-500');
      result.classList.add(response.ok ? 'text-green-500' : 'text-red-500');
    })
    .catch(() => {
      result.innerHTML = 'Something went wrong!';
      result.classList.remove('text-gray-500');
      result.classList.add('text-red-500');
    })
    .finally(() => {
      this.form.resetForm();
      setTimeout(() => {
        result.innerHTML = '';
      }, 5000);
    });
  }
}
