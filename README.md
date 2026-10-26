# John Russel M. Magtibay — Portfolio

Personal portfolio of an aspiring **Cloud Engineer** focused on **AWS** and **Terraform (Infrastructure as Code)**.

**Live site:** https://russelmagtibay-portfolio.vercel.app
**GitHub:** https://github.com/russelmagtibay

---

## Featured Cloud & Terraform Projects

| Project | What it demonstrates | Stack |
| --- | --- | --- |
| [Serverless Event-Driven Lead Capture Pipeline](https://github.com/russelmagtibay/Serverless-Event-Driven-Lead-Capture-Pipeline-on-AWS) | Fully modular Terraform; private S3 behind CloudFront OAC; least-privilege Lambda IAM; Free Tier friendly | Terraform, CloudFront, S3, API Gateway, Lambda, DynamoDB, SES |
| [Secure RDS Architecture](https://github.com/russelmagtibay/terraform-aws-secure-rds-architecture) | Variable validation and lifecycle postconditions that enforce private networking | Terraform, RDS, VPC, Security Groups |
| [IAM RBAC Automation](https://github.com/russelmagtibay/terraform-aws-iam-rbac-automation) | Declarative, YAML-driven role-based access and user onboarding | Terraform, IAM, YAML |
| [Financial Transaction Engine](https://github.com/russelmagtibay/enterprise-financial-transaction-engine) | Queue buffering, dead-letter queues, SNS fan-out, KMS encryption at rest | SQS, SNS, DynamoDB, KMS, LocalStack |
| [Observability & Incident Pipeline](https://github.com/russelmagtibay/enterprise-observability-incident-pipeline) | Metric filters, alarms and automated incident escalation | CloudWatch, SNS, SQS, LocalStack |
| [Serverless Image Pipeline](https://github.com/russelmagtibay/serverless-image-pipeline) | Event-driven S3 → Lambda → DynamoDB processing | S3, Lambda, DynamoDB, Python, LocalStack |
| [EC2 Lifecycle Engine](https://github.com/russelmagtibay/aws-ec2-lifecycle-engine) | Provision, vertically scale and tear down compute with least-privilege firewalls | EC2, Security Groups, AWS CLI, Docker |

## Web & Applied Projects

- **GrainScan** — YOLOv9 rice quality inspection (capstone). [`grainscan.html`](grainscan.html) · [repo](https://github.com/russelmagtibay/GrainScan-CNN-Grain-Classifier)
- **Payroll Management** — admin/staff payroll demo. Open `/newpayroll/`
- **Dimple Star Bus Booking** — routes, terminals and booking demo. Open `/dimplestar/`
- **RC Staycation** — hotel booking UI. https://rcstaycation.vercel.app/

> The Payroll and Dimple Star pages are static, client-side demos of PHP/MySQL class projects, so they can be hosted on Vercel's static platform. The original database schemas are kept in `newpayroll/newsalary.sql` and `dimplestar/database/`.

## Tech

Static site — HTML, CSS and vanilla JavaScript (no build step). Hosted on **Vercel** with continuous deployment from `main`.

```text
.
├── index.html            # Home: hero, about, cloud & terraform, projects
├── grainscan.html        # GrainScan case study
├── style.css             # Design tokens, light/dark themes, responsive layout
├── newpayroll/           # Payroll demo (admin + employee portals)
├── dimplestar/           # Bus booking demo
├── badges/               # Certification badges
├── picture/              # Project screenshots
└── vercel.json           # Routing, security headers, caching
```

### Deployment notes

`vercel.json` uses `"trailingSlash": true` and `"cleanUrls": false`. The sub-sites (`/newpayroll/`, `/dimplestar/`) rely on **relative links**; without the trailing slash, the browser resolves `admin/index.html` or `style.css` against the site root and returns 404. Forcing the slash keeps relative paths correct. The config also sets baseline security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) and long-lived caching for images.

## Run locally

```bash
npx serve .
# or open index.html directly / use VS Code "Live Server"
```

## Credentials

AWS Certified Cloud Practitioner · IT Specialist (Python, Networking) · Cisco CCNA modules · Cisco Cybersecurity pathway — see the *Credentials* viewer on the site.
