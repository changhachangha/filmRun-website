'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-film">
          <div
            className="text-center"
          >
            <h1 className="text-display-lg md:text-display-xl font-bold text-gray-900 mb-6">
              연락처
            </h1>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              새로운 프로젝트나 협업에 대한 문의를 환영합니다. 
              언제든지 연락주시면 성심껏 상담해드리겠습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-film">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div
                className="space-y-6"
              >
                <div>
                  <h2 className="text-display-sm font-bold text-gray-900 mb-6">
                    연락 정보
                  </h2>
                  <p className="text-gray-600 mb-8">
                    영화사 달리기와 함께 새로운 이야기를 만들어보세요. 
                    다양한 방법으로 연락하실 수 있습니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <Card variant="outline" padding="md">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">이메일</h3>
                        <p className="text-gray-600">contact@filmrun.co.kr</p>
                        <p className="text-gray-600">business@filmrun.co.kr</p>
                      </div>
                    </div>
                  </Card>

                  <Card variant="outline" padding="md">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">전화번호</h3>
                        <p className="text-gray-600">02-1234-5678</p>
                        <p className="text-gray-600">010-1234-5678</p>
                      </div>
                    </div>
                  </Card>

                  <Card variant="outline" padding="md">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">주소</h3>
                        <p className="text-gray-600">
                          서울특별시 강남구 테헤란로<br />
                          123 영화사달리기빌딩 10층
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card variant="outline" padding="md">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">운영시간</h3>
                        <p className="text-gray-600">
                          월-금: 9:00 - 18:00<br />
                          토-일: 휴무
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div
              >
                <Card variant="elevated" padding="lg">
                  <CardHeader>
                    <CardTitle className="text-display-sm">
                      문의 보내기
                    </CardTitle>
                    <p className="text-gray-600">
                      아래 양식을 작성해주시면 빠른 시일 내에 답변드리겠습니다.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            이름 *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="성함을 입력해주세요"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            이메일 *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="이메일을 입력해주세요"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          회사/소속
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="회사명이나 소속을 입력해주세요"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          문의 제목 *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="문의하실 내용의 제목을 입력해주세요"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          문의 내용 *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="문의하실 내용을 자세히 작성해주세요"
                          rows={6}
                          required
                        />
                      </div>

                      <div className="pt-4">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full btn-film flex items-center justify-center gap-2"
                        >
                          <Send className="w-5 h-5" />
                          문의 보내기
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div
          >
            <Card variant="outline" padding="none">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">
                    지도 위치
                  </p>
                  <p className="text-gray-400 text-sm">
                    서울특별시 강남구 테헤란로 123
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-film">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-display-md font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              영화사 달리기에 대해 자주 문의하시는 내용들을 정리했습니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: '영화 제작 의뢰는 어떻게 하나요?',
                answer: '연락처로 문의해주시면 프로젝트의 규모와 내용에 따라 상세한 상담을 진행합니다. 기획안과 예산 등을 함께 논의할 수 있습니다.',
              },
              {
                question: '제작 기간은 얼마나 걸리나요?',
                answer: '프로젝트의 규모와 복잡성에 따라 다르지만, 일반적으로 기획부터 후반 작업까지 6개월에서 1년 정도의 시간이 소요됩니다.',
              },
              {
                question: '해외 로케이션 촬영도 가능한가요?',
                answer: '네, 해외 로케이션 촬영도 가능합니다. 해외 촬영 경험이 풍부한 팀이 있어 안전하고 효율적인 촬영을 진행할 수 있습니다.',
              },
              {
                question: '개인 의뢰도 받나요?',
                answer: '개인 프로젝트도 내용과 규모에 따라 검토해보겠습니다. 먼저 상담을 통해 구체적인 내용을 논의해보시기 바랍니다.',
              },
            ].map((faq, index) => (
              <div
                key={index}
              >
                <Card variant="default" padding="lg">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Q. {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    A. {faq.answer}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}