import { IconType } from 'react-icons'
import Link from './Link'
import ReactMarkdown from 'react-markdown'
import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import BlockContent from '@sanity/block-content-to-react'
import Content from './Content'

const ProjectCard: React.FC<{
  isOpen: boolean
  onClick: () => void
  title: string
  summary: string
  description: any
  links?: [name: string, url: string][]
  technologies?: string[]
}> = ({
  isOpen,
  onClick,
  title,
  links,
  description,
  summary,
  technologies,
}) => {
  const ref = useRef()

  return (
    <div className="relative">
      <div
        className={clsx(
          'z-0 absolute -left-3 -right-3 h-full rounded-lg border-2 border-transparent transition-all duration-300',
          isOpen && 'border-gray-800 bg-black bg-opacity-10'
        )}
      />

      <div className="relative z-10">
        <div
          className="flex items-center cursor-pointer select-none py-3"
          onClick={onClick}
        >
          <div className="w-full">
            <div className="font-nunito font-bold mr-2">{title}</div>
            <div className="font-nunito font-normal text-faded-light">
              {summary}
            </div>
          </div>
          <span
            className={clsx(
              'dropdown-arrow text-text-light',
              isOpen && 'active'
            )}
          >
            <span />
            <span />
          </span>
        </div>

        <div
          ref={ref}
          className={clsx('transition-all ease-out overflow-hidden')}
          style={{
            maxHeight: isOpen ? (ref.current as any)?.scrollHeight : 0,
          }}
        >
          <div className="pb-2 opacity-90">
            <div className="mb-2">
              {links &&
                links.map(({ _key, title, url }: any) => (
                  <Link
                    key={_key}
                    underline
                    href={url}
                    className="font-roboto-mono text-sm inline-block pr-2"
                  >
                    {title}
                  </Link>
                ))}
            </div>
            {description && <Content blocks={description} />}
            <div className="mt-3">
              {technologies &&
                technologies.map((t) => (
                  <div
                    key={t}
                    className="inline-block mr-2 mb-2 px-1 py-0.5 rounded-sm bg-white bg-opacity-25 hover:bg-opacity-30"
                  >
                    {t}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dropdown-arrow {
          width: 1rem;
          height: 1rem;
          display: inline-block;
          position: relative;
          margin: 0 1rem;
        }
        .dropdown-arrow span {
          background-color: currentColor;
          position: absolute;
          top: 0.5rem;
          width: 0.55rem;
          height: 0.1rem;
          display: inline-block;
          transition: all 0.2s ease;
        }
        .dropdown-arrow span:nth-child(1) {
          left: 0;
          transform: rotate(45deg);
        }
        .dropdown-arrow span:nth-child(2) {
          right: 0;
          transform: rotate(-45deg);
        }
        .dropdown-arrow.active span:nth-child(1) {
          transform: rotate(-45deg);
        }
        .dropdown-arrow.active span:nth-child(2) {
          right: 0;
          transform: rotate(45deg);
        }
      `}</style>
    </div>
  )
}

export default ProjectCard
