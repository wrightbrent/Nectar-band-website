# GCP Resource Map - Project: brent-wright

**Project ID**: brent-wright
**Project Number**: 25838265638
**Last Updated**: 2026-02-07

---

## Storage

### Cloud Storage Bucket: `gs://nectarband.net/`

**2024 Performance Videos:**
- 2024_bloodletting.mp4
- 2024_bsrising.mp4
- 2024_crazy.mp4
- 2024_detroit.mp4
- 2024_farbehind.mp4
- 2024_heartbreaker.mp4
- 2024_heavenhell.mp4
- 2024_homesweethome.mp4
- 2024_maninbox.mp4
- 2024_panama.mp4
- 2024_pretender.mp4
- 2024_sandman.mp4
- 2024_shine.mp4
- 2024_trooper.mp4
- 2024_whatsup.mp4
- 2024_zombie.mp4

**Website Files:**
- index.html (main page)
- about.html
- events.html
- songs.html
- videos.html

**Band Member Pages:**
- Aaron.html / Aaron.jpeg
- Brent.html / Brent.jpg
- Jennifer.html / jen.jpg
- John.html / john.jpeg
- Pat.html / pat.jpeg

**Images:**
- band-photo.jpg
- logo.jpg

**Additional Videos:**
- Manitou series (Breadfan, Sandman, Trooper, cometogether, evanescence, wannado, wantyou, whatsup, whisper, strangle)
- Mark series (Panama, Seek, takemedown, trooper)
- CrazyTrain.mp4, Sandman.mp4, Home25.mp4, Panama25.mp4, Shine25.mp4, alliwannado.mp4

---

## DNS (Cloud DNS)

### Zone: nectarband-net (public)

| Name | Type | TTL | Value |
|------|------|-----|-------|
| nectarband.net. | A | 300 | 34.54.253.213 |
| nectarband.net. | NS | 21600 | ns-cloud-c1.googledomains.com. |
| www.nectarband.net. | DS | 300 | DNSSEC configured |

---

## Networking

- **VPC**: default (auto mode)

---

## Resources NOT in Use

- Compute Engine (no VMs)
- GKE (no clusters)
- Cloud Run (no services)
- Cloud Functions (none)
- Cloud SQL (no instances)
- App Engine (not configured)
- Pub/Sub (no topics)

---

## Enabled APIs (27)

- artifactregistry.googleapis.com
- bigquery.googleapis.com
- bigquerymigration.googleapis.com
- bigquerystorage.googleapis.com
- cloudapis.googleapis.com
- cloudbuild.googleapis.com
- cloudtrace.googleapis.com
- compute.googleapis.com
- containerregistry.googleapis.com
- datastore.googleapis.com
- dns.googleapis.com
- domains.googleapis.com
- firewallinsights.googleapis.com
- logging.googleapis.com
- monitoring.googleapis.com
- networkmanagement.googleapis.com
- networksecurity.googleapis.com
- orgpolicy.googleapis.com
- oslogin.googleapis.com
- pubsub.googleapis.com
- secretmanager.googleapis.com
- servicemanagement.googleapis.com
- serviceusage.googleapis.com
- sql-component.googleapis.com
- storage-api.googleapis.com
- storage-component.googleapis.com
- storage.googleapis.com

---

## Load Balancer

**IP Address**: 34.54.253.213 (nectar-ip)

| Forwarding Rule | Port | Target | Purpose |
|-----------------|------|--------|---------|
| nectar-fe | 80 | nectar-lb-target-proxy | HTTP → HTTPS redirect |
| nectar-fe-https | 443 | nectar-https-proxy | HTTPS traffic |

**SSL Certificate**: nectar-cert (Google-managed)
- Domains: nectarband.net, www.nectarband.net

**URL Maps**:
- nectar-lb → Backend bucket (nectarbebucket)
- nectar-http-redirect → 301 redirect to HTTPS

---

## Architecture Summary

The site **nectarband.net** is a static band website hosted on Google Cloud Storage, served via a load balancer at IP `34.54.253.213`.

- HTTPS enabled with Google-managed SSL certificate
- HTTP automatically redirects to HTTPS (301)
- DNS managed through Cloud DNS
- Both nectarband.net and www.nectarband.net supported
